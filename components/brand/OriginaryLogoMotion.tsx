"use client";

/**
 * OriginaryLogoMotion — canonical Originary website logo.
 * ────────────────────────────────────────────────────────────────────────────
 * Faithful port of the design-system `logo-hover.jsx` reveal
 * (originary-identity-kit): the "1" stem glides to the first i-slot, the cascade
 * letters (r g i n a r y) slide + fade in left-to-right, and the two i-dots drop
 * in last (the record-marker beat).
 *
 * Behaviour here: the FULL "originary" wordmark is the resting/visible state.
 * The reveal animation replays on a gentle loop (collapse to the compact "o1",
 * then re-open) and also on hover / keyboard focus. Reduced motion and keyboard
 * focus resolve straight to the full wordmark.
 *
 * Geometry is FROZEN (originary-identity-kit v2): viewBox "201 644 7487 1918",
 * one path per letter, `translate(x,2124) scale(1,-1)`. Do not retrack/restyle.
 * Fades use `fill-opacity` (not opacity) to survive the legacy
 * `*:not(.payment-page){opacity:1!important}` reset; transform-box:view-box
 * keeps descenders/dots on the baseline. Motion is CSS (see `.olh-*` in home.css).
 */

import { useCallback, useEffect, useRef, useState } from "react";

const WORDMARK_VIEW_BOX = "201 644 7487 1918";
const MARK_VIEW_BOX = "61 1038 1430 1122";
const flip = (x: number) => `translate(${x},2124) scale(1,-1)`;
const E = "cubic-bezier(0.4, 0, 0.2, 1)";
const EB = "cubic-bezier(0.34, 1.3, 0.64, 1)";

// Loop cadence: hold the full wordmark a long beat, briefly collapse to "o1",
// then re-reveal. (~4x the earlier hold.)
const LOOP_PERIOD_MS = 20800;
// How long it dwells on the collapsed "0 1" (binary) before re-revealing (2x).
const LOOP_CLOSED_MS = 1560;

const D = {
  o: "M573 -24C875 -24 1078 201 1078 526C1078 853 875 1080 573 1080C271 1080 67 853 67 526C67 201 271 -24 573 -24ZM573 158C392 158 281 301 281 526C281 753 393 898 573 898C753 898 865 753 865 526C865 302 754 158 573 158Z",
  r: "M119 0H330V645C330 802 424 881 543 881C588 881 610 876 622 872L638 1064C633 1066 606 1069 578 1069C448 1069 368 1002 327 890H321V1056H119Z",
  iStem: "M119 0H330V1056H119Z",
  iDot: "M224.5 1227.5C292.4 1227.5 347.5 1282.6 347.5 1350.5C347.5 1418.4 292.4 1473.5 224.5 1473.5C156.6 1473.5 101.5 1418.4 101.5 1350.5C101.5 1282.6 156.6 1227.5 224.5 1227.5Z",
  g: "M580 -432C846 -432 1061 -306 1061 14V1056H853V895H852C781 1021 661 1077 524 1077C251 1077 67 854 67 531C67 209 250 -14 525 -14C664 -14 778 43 851 166H852V6C852 -165 750 -254 580 -254C455 -254 362 -202 336 -102H119C147 -312 321 -432 580 -432ZM568 167C398 167 281 295 281 532C281 769 398 897 568 897C748 897 864 753 864 532C864 311 748 167 568 167Z",
  n: "M330 608C330 806 443 893 585 893C729 893 816 804 816 632V0H1027V658C1027 934 862 1077 645 1077C506 1077 398 1017 326 897V1056H119V0H330Z",
  a: "M441 -17C623 -17 709 65 753 150H757V0H965V724C965 939 806 1077 546 1077C282 1077 111 935 101 734H308C316 831 408 904 543 904C673 900 752 830 752 728V719C752 642 690 644 492 620C277 595 75 543 75 302C75 91 231 -17 441 -17ZM484 153C361 153 285 207 285 298C285 405 389 446 504 463C616 479 728 496 757 519V395C757 265 670 153 484 153Z",
  y: "M133 -418H267C407 -418 509 -338 566 -185L1028 1056H808L612 477C585 398 559 319 533 240C508 319 483 398 455 477L260 1056H38L426 7L384 -118C352 -204 313 -240 247 -240H133Z",
};

const SLOT = { o: 140, r1: 1247, i1: 1904, g: 2315, i2: 3427, n: 3813, a: 4913, r2: 5922, y: 6654 };
const STEM_IDLE_X = 1289; // the "1" idles here; opens +615 to the first i-slot.
const CASCADE: { d: string; x: number }[] = [
  { d: D.r, x: SLOT.r1 },
  { d: D.g, x: SLOT.g },
  { d: D.iStem, x: SLOT.i2 },
  { d: D.n, x: SLOT.n },
  { d: D.a, x: SLOT.a },
  { d: D.r, x: SLOT.r2 },
  { d: D.y, x: SLOT.y },
];
const DOT_SLOTS: { x: number; di: number }[] = [
  { x: SLOT.i1, di: 0.38 },
  { x: SLOT.i2, di: 0.45 },
];

export type OriginaryLogoMotionVariant = "wordmark" | "mark";

export interface OriginaryLogoMotionProps {
  variant?: OriginaryLogoMotionVariant;
  fill?: string;
  className?: string;
  /** Pin the wordmark fully open (no loop). */
  forceOpen?: boolean;
  /** Auto-replay the reveal on a loop. Default true. */
  loop?: boolean;
  ariaLabel?: string;
  /** Accepted for API compatibility. */
  replayKey?: number | string;
  replayOnHover?: boolean;
  autoPlay?: boolean;
}

export function OriginaryLogoMotion({
  variant = "wordmark",
  fill = "#0B0B0C",
  className,
  forceOpen = false,
  loop = true,
  ariaLabel = "Originary",
}: OriginaryLogoMotionProps) {
  // Full wordmark is the resting state; the loop briefly collapses + re-reveals.
  const [open, setOpen] = useState(true);
  const reopenRef = useRef<number | undefined>(undefined);

  // Collapse to "0 1" then re-reveal the wordmark. Used by the loop and on hover.
  const replay = useCallback(() => {
    if (forceOpen) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.clearTimeout(reopenRef.current);
    setOpen(false);
    reopenRef.current = window.setTimeout(() => setOpen(true), LOOP_CLOSED_MS);
  }, [forceOpen]);

  useEffect(() => {
    if (forceOpen || !loop) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const iv = window.setInterval(replay, LOOP_PERIOD_MS);
    return () => {
      window.clearInterval(iv);
      window.clearTimeout(reopenRef.current);
    };
  }, [forceOpen, loop, replay]);

  if (variant === "mark") {
    return (
      <svg role="img" aria-label={ariaLabel} viewBox={MARK_VIEW_BOX} className={className} xmlns="http://www.w3.org/2000/svg" fill={fill}>
        <path d={D.o} transform="translate(0,2124) scale(1,-1)" />
        <path d={D.iStem} transform="translate(1149,2124) scale(1,-1)" />
      </svg>
    );
  }

  const isOpen = forceOpen || open;

  return (
    <svg
      viewBox={WORDMARK_VIEW_BOX}
      className={`originary-logo${className ? ` ${className}` : ""}`}
      data-open={isOpen ? "true" : undefined}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      onMouseEnter={replay}
      style={{ overflow: "visible" }}
    >
      {/* o — always present */}
      <path className="olh-o" d={D.o} transform={flip(SLOT.o)} />

      {/* the "1" — idles beside the o, glides to the first i-slot on open */}
      <g className="olh-stem" style={{ transition: `transform 0.45s ${E} 0.04s` }}>
        <path d={D.iStem} transform={flip(STEM_IDLE_X)} />
      </g>

      {/* cascade letters — slide + fade in left to right */}
      {CASCADE.map((L, k) => {
        const delay = (0.1 + 0.035 * k).toFixed(3);
        return (
          <g key={`c${k}`} className="olh-casc" style={{ transition: `fill-opacity 0.3s ${E} ${delay}s, transform 0.38s ${E} ${delay}s` }}>
            <path d={L.d} transform={flip(L.x)} />
          </g>
        );
      })}

      {/* twin i-dots — drop in last */}
      {DOT_SLOTS.map((dot, i) => (
        <g key={`d${i}`} className="olh-dot" style={{ transition: `fill-opacity 0.2s ${E} ${dot.di}s, transform 0.4s ${EB} ${dot.di}s` }}>
          <path d={D.iDot} transform={flip(dot.x)} />
        </g>
      ))}
    </svg>
  );
}

export default OriginaryLogoMotion;

// Geometry export for canvas renderings (e.g. a giant footer stream).
export const WORDMARK_GEOMETRY = {
  viewBox: { x: 201, y: 644, width: 7487, height: 1918 },
  transform: (x: number) => flip(x),
  paths: [
    { d: D.o, x: SLOT.o },
    { d: D.r, x: SLOT.r1 },
    { d: D.iStem, x: SLOT.i1 },
    { d: D.iDot, x: SLOT.i1 },
    { d: D.g, x: SLOT.g },
    { d: D.iStem, x: SLOT.i2 },
    { d: D.iDot, x: SLOT.i2 },
    { d: D.n, x: SLOT.n },
    { d: D.a, x: SLOT.a },
    { d: D.r, x: SLOT.r2 },
    { d: D.y, x: SLOT.y },
  ],
};
