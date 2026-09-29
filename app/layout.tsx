import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({ src: '../public/fonts/inter-tight-latin.woff2', display: 'swap', variable: '--font-inter', weight: '100 900' });
const title = 'Kaah Travel & Cargo | Flights, Cargo & Travel Services';
const description = 'Book flights and send cargo with Kaah Travel & Cargo. Get simple, reliable travel and cargo support with quick quotes and personal assistance.';
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')),
  title,
  description,
  openGraph: { title, description, siteName: 'Kaah Travel & Cargo Agency LTD', type: 'website', locale: 'en_KE' },
  twitter: { card: 'summary_large_image', title, description },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={inter.variable}>{children}</body></html>;
}
