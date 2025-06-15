import * as React from 'react';

export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-primary"
      aria-label="Code Showcase Logo"
    >
      <path d="M10 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
      <path d="M14 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      <path d="m7 8 3 4-3 4" />
      <path d="M17 8s-2 2.5-2 4 2 4 2 4" />
    </svg>
  );
}
