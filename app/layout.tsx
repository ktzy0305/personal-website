"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
  types: ReactNode;
  params?: any;
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(props: LayoutProps) {
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
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
