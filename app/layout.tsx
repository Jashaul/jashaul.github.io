import './globals.css';
import clsx from 'clsx';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';
import AnalyticsWrapper from '../components/analytics';
import type { Metadata } from 'next';

const kaisei = localFont({
  src: '../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jashaul Diwakar',
    template: '%s | Jashaul Diwakar',
  },
  description: 'Developer',
  openGraph: {
    title: 'Jashaul Diwakar',
    description: 'Developer',
    url: 'https://jashaul.vercel.app',
    siteName: 'Jashaul Diwakar',
    images: [
      {
        url: 'https://jashaul.vercel.app/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        kaisei.variable
      )}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  )
}
