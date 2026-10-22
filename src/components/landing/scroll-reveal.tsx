"use client";

import { useEffect } from "react";
import { animate, inView } from "motion";

const EASE_OUT: [number, number, number, number] = [0.2, 0.7, 0.2, 1];
const CSS_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/**
 * Fades and lifts every [data-reveal] element as it scrolls into view, with an
 * optional stagger from data-delay (ms). Elements already on screen at load are
 * left alone, and nothing moves when the visitor prefers reduced motion.
 * Content is server-rendered visible, so it still shows without JavaScript.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stops: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;

      const delay = Number(el.dataset.delay ?? 0) / 1000;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";

      stops.push(
        inView(
          el,
          () => {
            animate(
              el,
              { opacity: [0, 1], y: [24, 0] },
              {
                delay,
                duration: 0.7,
                ease: EASE_OUT,
                opacity: { delay, duration: 0.7, ease: CSS_EASE },
              },
            );
          },
          { amount: 0.12, margin: "0px 0px -40px 0px" },
        ),
      );
    });

    return () => stops.forEach((stop) => stop());
  }, []);

  return null;
}
