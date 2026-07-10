"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

type FaqItemProps = {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

function FaqItem({ id, question, answer, open, onToggle }: FaqItemProps) {
  return (
    <div className="faq-item glass-card rounded-xl overflow-hidden">
      <button
        type="button"
        id={`${id}-button`}
        className="faq-trigger"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
      >
        <span className="text-left font-medium text-text-primary">{question}</span>
        <Icon
          name="chevron"
          size={18}
          className={`shrink-0 text-cyan-soft transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`faq-panel ${open ? "faq-panel-open" : ""}`}
      >
        <p className="text-sm leading-relaxed text-text-secondary">{answer}</p>
      </div>
    </div>
  );
}

type FaqAccordionProps = {
  items: { id: string; question: string; answer: string }[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <FaqItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          open={openId === item.id}
          onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
        />
      ))}
    </div>
  );
}
