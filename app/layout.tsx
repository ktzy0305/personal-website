'use client';

import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from './components/navbar'
import { ThemeProvider } from './contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Kevin Toh</title>
        <meta name="description" content="Kevin's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {/* Navigation Bar */}
          <NavigationBar />
          {/* Child Components */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
