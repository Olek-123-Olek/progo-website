"use client";

import { useEffect } from "react";

/**
 * Progressive reveal for homepage sections.
 * Observes main sections with ids and .reveal-on-scroll elements.
 */
export function RevealObserver() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id], .reveal-on-scroll"),
    );

    if (reduced) {
      nodes.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    nodes.forEach((el) => el.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
