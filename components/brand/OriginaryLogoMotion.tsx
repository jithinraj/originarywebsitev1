"use client";

/**
 * OriginaryLogoMotion
 * ────────────────────────────────────────────────────────────────────────────
 * Animated wordmark for Originary.
 *
 * Choreography (≈ 1.2 s):
 *   1. The first O resolves at the origin while a single pulse expands from it.
 *   2. The remaining letters slide outward from a contracted state, sequenced
 *      by their distance from the origin.
 *   3. The two i-dots fly out from inside the O and land as record markers —
 *      the "portable proof" beat.
 *
 * Stack: React + framer-motion. No other deps. Honours `prefers-reduced-motion`.
 *
 * Usage:
 *   <OriginaryLogoMotion />                            // hero, autoplays once
 *   <OriginaryLogoMotion variant="nav" replayOnHover/> // nav lockup, hover-replay
 *   <OriginaryLogoMotion variant="mark" />             // just the O + pulse
 *   <OriginaryLogoMotion replayKey={replayKey} />      // controlled replay
 */

import { motion, useReducedMotion, type Easing } from "framer-motion";
import { useCallback, useId, useState } from "react";

// ─── Geometry ───────────────────────────────────────────────────────────────

const WORDMARK_VIEW_BOX = "48 469 7823 1962";
const MARK_VIEW_BOX = "20 870 1130 1170";

const CENTROID_X = 3960;
const ORIGIN_X = 584;
const ORIGIN_Y = 1457;
const DOT_Y = 627;

type LetterPath = { id: string; cx: number; d: string };

const PATHS: Record<string, LetterPath> = {
  O: {
    id: "O",
    cx: 584,
    d: "M584 2008C895 2008 1105 1785 1105 1457C1105 1129 895 904 584 904C273 904 63 1129 63 1457C63 1785 273 2008 584 2008ZM584 1797C421 1797 318 1668 318 1457C318 1245 422 1115 584 1115C745 1115 849 1246 849 1457C849 1667 746 1797 584 1797Z",
  },
  r1: {
    id: "r1",
    cx: 1513,
    d: "M1221 1984H1473V1386C1473 1221 1566 1138 1686 1138C1736 1138 1786 1143 1805 1146V922C1785 920 1757 918 1723 918C1587 918 1506 982 1467 1103H1464V928H1221Z",
  },
  i1Stem: {
    id: "i1Stem",
    cx: 2054,
    d: "M1928 1984H2180V928H1928Z",
  },
  i1Dot: {
    id: "i1Dot",
    cx: 2054,
    d: "M2054 771C2140 771 2205 709 2205 627C2205 546 2140 484 2054 484C1968 484 1903 546 1903 627C1903 709 1968 771 2054 771Z",
  },
  g: {
    id: "g",
    cx: 2827,
    d: "M2841 2416C3127 2416 3340 2284 3340 1957V928H3091V1085H3090C3020 964 2905 907 2768 907C2497 907 2313 1130 2313 1451C2313 1769 2494 1991 2770 1991C2909 1991 3021 1935 3089 1811H3090V1972C3090 2134 2999 2221 2841 2221C2723 2221 2636 2173 2612 2082H2365C2393 2287 2562 2416 2841 2416ZM2829 1783C2673 1783 2568 1664 2568 1448C2568 1233 2673 1113 2829 1113C2994 1113 3102 1245 3102 1448C3102 1651 2994 1783 2829 1783Z",
  },
  i2Stem: {
    id: "i2Stem",
    cx: 3658,
    d: "M3532 1984H3784V928H3532Z",
  },
  i2Dot: {
    id: "i2Dot",
    cx: 3658,
    d: "M3658 771C3744 771 3809 709 3809 627C3809 546 3744 484 3658 484C3572 484 3507 546 3507 627C3507 709 3572 771 3658 771Z",
  },
  n: {
    id: "n",
    cx: 4458,
    d: "M4236 1387C4236 1207 4335 1128 4467 1128C4602 1128 4680 1209 4680 1364V1984H4933V1324C4933 1053 4777 907 4556 907C4411 907 4304 971 4232 1090V928H3984V1984H4236Z",
  },
  a: {
    id: "a",
    cx: 5548,
    d: "M5449 2001C5621 2001 5710 1929 5760 1835H5764V1984H6012V1264C6012 1044 5849 907 5574 907C5298 907 5126 1046 5114 1256H5357C5364 1167 5446 1103 5569 1103C5690 1103 5762 1167 5762 1257V1265C5762 1337 5695 1340 5499 1362C5281 1385 5084 1444 5084 1684C5084 1895 5239 2001 5449 2001ZM5511 1814C5401 1814 5330 1765 5330 1682C5330 1586 5422 1547 5530 1531C5634 1515 5732 1499 5763 1479V1593C5763 1716 5676 1814 5511 1814Z",
  },
  r2: {
    id: "r2",
    cx: 6497,
    d: "M6205 1984H6457V1386C6457 1221 6550 1138 6670 1138C6720 1138 6770 1143 6789 1146V922C6769 920 6741 918 6707 918C6571 918 6490 982 6451 1103H6448V928H6205Z",
  },
  y: {
    id: "y",
    cx: 7321,
    d: "M6899 2402H7064C7217 2402 7321 2323 7384 2158L7856 928H7592L7399 1478C7372 1556 7347 1634 7323 1712C7299 1634 7273 1556 7247 1478L7053 928H6786L7193 1978L7154 2080C7124 2163 7092 2197 7024 2197H6899Z",
  },
};

const STEM_ORDER: LetterPath[] = [
  PATHS.O,
  PATHS.r1,
  PATHS.i1Stem,
  PATHS.g,
  PATHS.i2Stem,
  PATHS.n,
  PATHS.a,
  PATHS.r2,
  PATHS.y,
];

const PROOF_DOTS: LetterPath[] = [PATHS.i1Dot, PATHS.i2Dot];

// ─── Motion config ──────────────────────────────────────────────────────────

const EASE_OUT: Easing = [0.16, 1, 0.3, 1];
const EASE_PRECISE: Easing = [0.22, 1, 0.36, 1];

/** Stagger by horizontal distance from the origin O. */
function letterDelay(cx: number): number {
  return 0.24 + (Math.abs(cx - ORIGIN_X) / 7400) * 0.48;
}

/** How far each letter starts contracted toward the wordmark centroid. */
function contractOffset(cx: number): number {
  return (CENTROID_X - cx) * 0.12;
}

// ─── Component ──────────────────────────────────────────────────────────────

export type OriginaryLogoMotionVariant = "wordmark" | "mark";

export interface OriginaryLogoMotionProps {
  /** `"wordmark"` (default) renders Originary, `"mark"` renders just the O. */
  variant?: OriginaryLogoMotionVariant;
  /** Foreground colour. Defaults to near-black. */
  fill?: string;
  /** Class applied to the root <svg>. Size with Tailwind / CSS as usual. */
  className?: string;
  /**
   * When set, the animation re-runs whenever this value changes. Use a
   * counter, timestamp, or any unique key from your parent state.
   */
  replayKey?: number | string;
  /** Replay on pointer-enter. Default false. */
  replayOnHover?: boolean;
  /** Play once on mount. Default true. */
  autoPlay?: boolean;
  /** Accessible label. Default "Originary". */
  ariaLabel?: string;
}

export function OriginaryLogoMotion({
  variant = "wordmark",
  fill = "#0B0B0C",
  className,
  replayKey,
  replayOnHover = false,
  autoPlay = true,
  ariaLabel = "Originary",
}: OriginaryLogoMotionProps) {
  const reactId = useId();
  const [internalKey, setInternalKey] = useState(autoPlay ? 0 : -1);
  const reduced = useReducedMotion();

  const activeKey = `${replayKey ?? internalKey}-${reactId}`;
  const handleHover = useCallback(() => {
    if (replayOnHover) setInternalKey((k) => k + 1);
  }, [replayOnHover]);

  const isMark = variant === "mark";
  const viewBox = isMark ? MARK_VIEW_BOX : WORDMARK_VIEW_BOX;
  const stems = isMark ? [PATHS.O] : STEM_ORDER;
  const dots = isMark ? [] : PROOF_DOTS;

  return (
    <svg
      key={activeKey}
      role="img"
      aria-label={ariaLabel}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      onPointerEnter={handleHover}
      style={{ overflow: "visible" }}
    >
      {/* Stems and bowls */}
      {stems.map((letter) => {
        const isO = letter.id === "O";
        const contract = contractOffset(letter.cx);
        const delay = reduced ? 0 : isO ? 0 : letterDelay(letter.cx);

        return (
          <motion.path
            key={letter.id}
            d={letter.d}
            fill={fill}
            initial={
              reduced
                ? false
                : {
                    x: isO ? 0 : contract,
                    opacity: isO ? 0 : 0,
                    scale: isO ? 0.9 : 0.985,
                  }
            }
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              x: { duration: 1.05, ease: EASE_OUT, delay },
              opacity: {
                duration: isO ? 0.48 : 0.7,
                ease: EASE_PRECISE,
                delay: isO ? 0.02 : delay + 0.03,
              },
              scale: {
                duration: isO ? 0.82 : 1.05,
                ease: EASE_OUT,
                delay: isO ? 0.04 : delay,
              },
            }}
            style={{ transformOrigin: `${letter.cx}px ${ORIGIN_Y}px` }}
          />
        );
      })}

      {/* Proof dots — fly out from the O, land as i-dots */}
      {dots.map((dot, i) => {
        const startX = ORIGIN_X - dot.cx;
        const startY = ORIGIN_Y - DOT_Y;
        const delay = reduced ? 0 : 0.32 + i * 0.16;
        return (
          <motion.path
            key={dot.id}
            d={dot.d}
            fill={fill}
            initial={
              reduced
                ? false
                : { x: startX, y: startY, scale: 0.34, opacity: 0 }
            }
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{
              x: { duration: 0.98, ease: EASE_OUT, delay },
              y: { duration: 0.98, ease: EASE_OUT, delay },
              scale: { duration: 0.98, ease: EASE_OUT, delay },
              opacity: {
                duration: 0.34,
                ease: EASE_PRECISE,
                delay: delay + 0.06,
              },
            }}
            style={{ transformOrigin: `${dot.cx}px ${DOT_Y}px` }}
          />
        );
      })}
    </svg>
  );
}

export default OriginaryLogoMotion;

// Geometry export for canvas renderings of the wordmark (giant footer stream).
export const WORDMARK_GEOMETRY = {
  viewBox: { x: 48, y: 469, width: 7823, height: 1962 },
  paths: [...STEM_ORDER, ...PROOF_DOTS].map((p) => p.d),
}
