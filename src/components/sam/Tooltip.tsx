import React, { useState } from "react";
import { usePopper } from "react-popper";
import ttstyles from "./Tooltip.module.scss";

interface TooltipProps {
  tip: string;
  position: "left" | "right" | "below" | "above";
  children: React.ReactNode;
}

export const Tooltip = ({ tip, position = "below", children }: TooltipProps) => {
  const [referenceElement, setReferenceElement] = useState<HTMLSpanElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "arrow",
        options: { element: arrowElement, padding: 5 },
      },
      {
        name: "offset",
        options: { offset: [0, 8] },
      },
      {
        name: "flip",
        options: {
          fallbackPlacements: position === "left" || position === "right" ? ["left", "right"] : ["bottom", "top"],
        },
      },
      {
        name: "preventOverflow",
        options: { altAxis: true, padding: 40 },
      },
    ],
  });
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={ttstyles["tooltip-wrapper"]}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <span ref={setReferenceElement} className={ttstyles["tooltip-content"]}>
        {children}
      </span>

      {visible && (
        <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className={ttstyles.tooltip}>
          {tip}
          <div ref={setArrowElement} style={styles.arrow} className={ttstyles.arrow} />
        </div>
      )}
    </div>
  );
};
