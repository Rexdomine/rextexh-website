import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'RexTexh — Practical AI implementation for business workflows',
  description: 'RexTexh helps businesses use AI to save time, improve workflows, build custom tools, and develop practical capability.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
