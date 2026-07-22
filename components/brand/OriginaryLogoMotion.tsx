"use client";

/**
 * OriginaryLogoMotion — the canonical Originary mark.
 * ────────────────────────────────────────────────────────────────────────────
 * Two forms from one geometry. The wordmark is the logo; the origin point (the
 * o with a dot at its exact optical centre) is the symbol.
 *
 * Motion: ⊙ → 01 → 10 → originary.
 *   ⊙   origin     the point rests inside the o
 *   01  formation  the point ejects and stretches into the stem
 *   10  exchange   ring and stem swap places (the counterparty's view)
 *   originary      the 0 flows back into the first o, the 1 into the i
 *
 * Continuity: nothing is replaced by a typed character. The same ring and stem
 * move between positions throughout.
 *
 * Plays once per session on the homepage, then the finished wordmark persists.
 * It never loops, never autoplays a second time, and is never required to learn
 * the name. Reduced motion and small screens resolve to the wordmark instantly.
 *
 * Geometry is frozen: wordmark viewBox "201 644 7487 1918", symbol viewBox
 * "161 998 1104 1196", every path placed with translate(x,2124) scale(1,-1).
 * Never redraw, respace, or substitute type.
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/** Layout effect on the client, plain effect on the server (no SSR warning). */
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const WORDMARK_VIEW_BOX = "201 644 7487 1918";
/** Standalone symbol: the same o and point, uncontained. */
const SYMBOL_VIEW_BOX = "161 998 1104 1196";

const flip = (x: number) => `translate(${x},2124) scale(1,-1)`;
/** The origin point: optical centre of the o at (712.5, 1596), diameter 246u. */
const ORIGIN_POINT = "translate(488,2946.5) scale(1,-1)";

/** Timing and easing, per the identity spec. */
const REST_MS = 250; // 200-300ms before any qualified play
const EJECT_MS = 380; // ⊙ → 01
const SWAP_MS = 400; // 01 → 10
const HOLD_MS = 520; // dwell on 10
const GLIDE_MS = 450; // 10 → originary
const STAGGER_MS = 35; // per cascade letter
const EASE_STANDARD = "cubic-bezier(0.4, 0, 0.2, 1)";
const EASE_INOUT = "cubic-bezier(0.65, 0, 0.35, 1)"; // eject + swap
const EASE_SETTLE = "cubic-bezier(0.34, 1.3, 0.64, 1)"; // dot settle

const SESSION_KEY = "originary:logo-played";

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
/** Where the stem stands while the mark reads 01. */
const STEM_FORM_X = 1289;
/** Exchange (10): the ring and the stem trade places. */
const EX_O_X = 1341;
const EX_STEM_X = 88;

const CASCADE: { d: string; x: number }[] = [
  { d: D.r, x: SLOT.r1 },
  { d: D.g, x: SLOT.g },
  { d: D.iStem, x: SLOT.i2 },
  { d: D.n, x: SLOT.n },
  { d: D.a, x: SLOT.a },
  { d: D.r, x: SLOT.r2 },
  { d: D.y, x: SLOT.y },
];
const DOT_SLOTS = [SLOT.i1, SLOT.i2];

type Phase = "origin" | "formation" | "exchange" | "identity";

export type OriginaryLogoMotionVariant = "wordmark" | "mark";

export interface OriginaryLogoMotionProps {
  variant?: OriginaryLogoMotionVariant;
  fill?: string;
  className?: string;
  /** Resolve straight to the finished wordmark (footer, print, previews). */
  forceOpen?: boolean;
  /** Opt in to the once-per-session sequence. Off by default. */
  autoPlay?: boolean;
  ariaLabel?: string;
  /** Replay the sequence on hover or focus. The wordmark stays visible either way. */
  replayOnHover?: boolean;
  /** Accepted for API compatibility. */
  loop?: boolean;
  replayKey?: number | string;
}

/** Small screens and reduced motion get the finished wordmark immediately. */
function shouldResolveImmediately() {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 768px)").matches ||
    window.sessionStorage?.getItem(SESSION_KEY) === "1"
  );
}

export function OriginaryLogoMotion({
  variant = "wordmark",
  fill = "#0B0B0C",
  className,
  forceOpen = false,
  autoPlay = false,
  replayOnHover = false,
  ariaLabel = "Originary",
}: OriginaryLogoMotionProps) {
  // Server and first paint render the finished wordmark, so the name is never
  // withheld; the sequence only steps back to ⊙ when it is qualified to play.
  const [phase, setPhase] = useState<Phase>("identity");
  // Transitions stay off until the mark is seated at ⊙, so the wordmark never
  // flashes and then collapses on its way into the sequence.
  const [animating, setAnimating] = useState(false);
  const timers = useRef<number[]>([]);
  const rafs = useRef<number[]>([]);
  // Whether this mount qualifies for the once-per-session play. Resolved once,
  // before the flag is written, so a re-run of the effect cannot cancel itself.
  const qualified = useRef<boolean | null>(null);
  if (qualified.current === null) {
    qualified.current = typeof window !== "undefined" && autoPlay && !forceOpen && !shouldResolveImmediately();
  }

  const clear = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    rafs.current.forEach(window.cancelAnimationFrame);
    timers.current = [];
    rafs.current = [];
  }, []);

  /** Run ⊙ → 01 → 10 → originary from the top. */
  const play = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clear();
    // Seat at ⊙ with transitions off, so the wordmark never collapses on screen.
    setAnimating(false);
    setPhase("origin");
    rafs.current.push(
      window.requestAnimationFrame(() => {
        rafs.current.push(
          window.requestAnimationFrame(() => {
            setAnimating(true);
            const at = (ms: number, p: Phase) =>
              timers.current.push(window.setTimeout(() => setPhase(p), ms));
            at(REST_MS, "formation");
            at(REST_MS + EJECT_MS, "exchange");
            at(REST_MS + EJECT_MS + SWAP_MS + HOLD_MS, "identity");
          }),
        );
      }),
    );
  }, [clear]);

  useIsomorphicLayoutEffect(() => {
    if (!qualified.current) return;
    try {
      window.sessionStorage?.setItem(SESSION_KEY, "1");
    } catch {
      /* storage unavailable; the sequence simply plays again next load */
    }
    play();
    return clear;
  }, [play, clear]);

  if (variant === "mark") {
    return (
      <svg role="img" aria-label={ariaLabel} viewBox={SYMBOL_VIEW_BOX} className={className} xmlns="http://www.w3.org/2000/svg" fill={fill}>
        <path d={D.o} transform={flip(SLOT.o)} />
        <path d={D.iDot} transform={ORIGIN_POINT} />
      </svg>
    );
  }

  const p = forceOpen ? "identity" : phase;
  const isIdentity = p === "identity";

  // The ring and the stem move between positions; nothing is swapped out.
  const oX = p === "exchange" ? EX_O_X : SLOT.o;
  const stemX = p === "origin" ? STEM_FORM_X : p === "formation" ? STEM_FORM_X : p === "exchange" ? EX_STEM_X : SLOT.i1;
  const moveEase = p === "identity" ? EASE_STANDARD : EASE_INOUT;
  const moveMs = p === "exchange" ? SWAP_MS : p === "identity" ? GLIDE_MS : EJECT_MS;

  return (
    <svg
      viewBox={WORDMARK_VIEW_BOX}
      className={`originary-logo${className ? ` ${className}` : ""}`}
      data-phase={p}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      onMouseEnter={replayOnHover ? play : undefined}
      onFocus={replayOnHover ? play : undefined}
      style={{ overflow: "visible" }}
    >
      {/* the ring — the 0, and the first o */}
      <g className="olh-o" style={{ transform: `translateX(${oX - SLOT.o}px)`, transition: animating ? `transform ${moveMs}ms ${moveEase}` : "none" }}>
        <path d={D.o} transform={flip(SLOT.o)} />
      </g>

      {/* the origin point — rests in the o, then stretches into the stem */}
      <g
        className="olh-origin"
        style={{
          fillOpacity: p === "origin" ? 1 : 0,
          transform: p === "origin" ? "none" : `translateX(${STEM_FORM_X - 488}px)`,
          transition: animating ? `transform ${EJECT_MS}ms ${EASE_INOUT}, fill-opacity ${EJECT_MS}ms ${EASE_INOUT}` : "none",
        }}
      >
        <path d={D.iDot} transform={ORIGIN_POINT} />
      </g>

      {/* the stem — the 1, and the i */}
      <g
        className="olh-stem"
        style={{
          fillOpacity: p === "origin" ? 0 : 1,
          transform: `translateX(${stemX - STEM_FORM_X}px) scaleY(${p === "origin" ? 0 : 1})`,
          transformOrigin: `${STEM_FORM_X}px 2124px`,
          transition: animating ? `transform ${moveMs}ms ${moveEase}, fill-opacity ${EJECT_MS}ms ${EASE_INOUT}` : "none",
        }}
      >
        <path d={D.iStem} transform={flip(STEM_FORM_X)} />
      </g>

      {/* the remaining letters spell out, 35ms apart */}
      {CASCADE.map((L, k) => (
        <g
          key={`c${k}`}
          className="olh-casc"
          style={{
            fillOpacity: isIdentity ? 1 : 0,
            transform: isIdentity ? "none" : "translateX(-150px)",
            transition: animating ? `fill-opacity ${GLIDE_MS}ms ${EASE_STANDARD} ${k * STAGGER_MS}ms, transform ${GLIDE_MS}ms ${EASE_STANDARD} ${k * STAGGER_MS}ms` : "none",
          }}
        >
          <path d={L.d} transform={flip(L.x)} />
        </g>
      ))}

      {/* the i-dots settle last */}
      {DOT_SLOTS.map((x, i) => (
        <g
          key={`d${i}`}
          className="olh-dot"
          style={{
            fillOpacity: isIdentity ? 1 : 0,
            transform: isIdentity ? "none" : "translateY(-280px)",
            transition: animating ? `fill-opacity 200ms ${EASE_SETTLE} ${GLIDE_MS + i * STAGGER_MS}ms, transform 200ms ${EASE_SETTLE} ${GLIDE_MS + i * STAGGER_MS}ms` : "none",
          }}
        >
          <path d={D.iDot} transform={flip(x)} />
        </g>
      ))}
    </svg>
  );
}

export default OriginaryLogoMotion;

// Geometry export for canvas renderings (e.g. the closing wordmark).
export const WORDMARK_GEOMETRY = {
  viewBox: { x: 201, y: 644, width: 7487, height: 1918 },
  transform: (x: number) => flip(x),
  paths: [
    { d: D.o, x: SLOT.o },
    // the origin point sits at the centre of the o, so it carries its own transform
    { d: D.iDot, x: SLOT.o, t: ORIGIN_POINT },
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
