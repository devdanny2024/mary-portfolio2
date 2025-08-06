import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import React from 'react';

// Configure the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Expert Nursing & Personalized Care',
  description: 'Providing compassionate and professional nursing services in the comfort of your own home.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
