import type { ReactNode } from "react";

export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5551989036374";

export function CtaButton({
  children = "Quero solicitar um orçamento",
  className = "",
  size = "md",
}: {
  children?: ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizes = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md border border-white bg-accent ${sizes} font-semibold text-accent-foreground shadow-md hover:bg-accent-hover transition-colors ${className}`}
    >
      {children}
    </a>
  );
}