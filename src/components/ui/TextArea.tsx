import type { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
}

/** Shared labeled textarea with validation error display. */
export default function TextArea({
  label,
  id,
  error,
  className = "",
  ...rest
}: TextAreaProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-body text-sm font-medium text-espresso">
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={errorId}
        className={`rounded border bg-blush px-4 py-2.5 font-body text-sm text-espresso placeholder:text-espresso/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-blush ${
          error ? "border-red-500" : "border-rose-gold/20"
        } ${className}`}
        {...rest}
      />
      {error && (
        <p id={errorId} role="alert" className="font-body text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
