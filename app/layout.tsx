import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Sophia Reyes — Lifestyle & Fashion Creator',
  description: 'Sophia Reyes is a lifestyle and fashion content creator sharing daily inspiration, style tips, and brand collaborations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="m-0 p-0 font-body">
          {children}
          <Toaster />
        </body>
    </html>
  );
}
