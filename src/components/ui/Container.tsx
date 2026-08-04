import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Shared max-width content wrapper used by every page section. */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-container px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
