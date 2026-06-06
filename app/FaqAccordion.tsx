"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className="faq-list">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-faq-panel-${index}`;
        const buttonId = `${baseId}-faq-button-${index}`;

        return (
          <article className="faq-item" key={faq.question}>
            <button
              id={buttonId}
              className="faq-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{faq.question}</span>
              <motion.span
                className="faq-icon"
                aria-hidden="true"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
              >
                <Plus size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-panel"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={reduceMotion ? { height: "auto", opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { height: { duration: 0.34, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.2 } }
                  }
                >
                  <p>{faq.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
