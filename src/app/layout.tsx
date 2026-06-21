import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import 'katex/dist/katex.min.css';
import "./globals.css";
import NavigationBar from "@/components/navbar";
import Providers from "./providers";
import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--ff-display",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--ff-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--ff-mono",
  display: "swap",
});

export const metadata = {
  title: "Kevin Toh — AI Engineer",
  description:
    "Kevin Toh — AI engineer building multimodal systems that perceive and reason. CS grad, NUS.",
};

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}
      >
        <Providers>
          <NavigationBar />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
