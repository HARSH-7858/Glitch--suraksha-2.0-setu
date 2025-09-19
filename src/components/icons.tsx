import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5 0 8-4.5 8-11.5C20 4.5 16.5 2 12 2S4 4.5 4 10.5C4 17.5 7 22 12 22z" />
    <path d="M12 2a9.5 9.5 0 0 1 5.4 16.2" />
  </svg>
);
