"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";

export default function ScrollControls() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const navigationEntry = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;
    const isReload = navigationEntry?.type === "reload";

    if (!window.location.hash || isReload) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          className="back-to-top"
          aria-label="페이지 상단으로 이동"
          onClick={moveToTop}
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{
            duration: reduceMotion ? 0 : 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ArrowUp size={22} aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
