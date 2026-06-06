"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { type ReactNode, useState } from "react";

type ContactLinkProps = {
  href: string;
  className: string;
  copyValue: string;
  feedback: string;
  children: ReactNode;
};

export default function ContactLink({
  href,
  className,
  copyValue,
  feedback,
  children,
}: ContactLinkProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard?.writeText(copyValue);
      setActive(true);
      window.setTimeout(() => setActive(false), 1600);
    } catch {
      // The link itself remains the primary action when clipboard access is blocked.
    }
  };

  return (
    <span className="contact-link-wrap">
      <a className={className} href={href} onClick={handleClick}>
        {children}
      </a>
      <AnimatePresence>
        {active ? (
          <motion.span
            className="contact-toast"
            role="status"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{
              duration: reduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {feedback}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </span>
  );
}
