import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GotPrint - Professional Printing Solutions',
  description: 'Professional printing services for business essentials, marketing materials, and custom products. Quality printing with fast turnaround times.',
  keywords: 'printing, business cards, postcards, flyers, banners, professional printing',
  authors: [{ name: 'GotPrint' }],
  creator: 'GotPrint',
  publisher: 'GotPrint',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
