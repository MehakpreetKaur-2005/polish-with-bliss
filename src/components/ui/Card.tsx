import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** Shared bordered surface with the Design System's hover lift (section 5.2). */
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded border border-rose-gold/15 bg-blush p-6 shadow-sm transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
