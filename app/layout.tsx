'use client';

import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from './components/navbar'

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
        {/* Navigation Bar */}
        <NavigationBar />
        {/* Child Components */}
        {children}
      </body>
    </html>
  )
}
