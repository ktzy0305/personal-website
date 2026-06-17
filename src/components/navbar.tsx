"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/navigation.module.css";
import ToggleSwitch from "./switch";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavigationBar = (): JSX.Element => {
  const { isDarkMode } = useTheme() ?? {};
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const isBlogPost = () => pathname.startsWith("/blog");
  const isNotes = () => pathname.startsWith("/notes");

  useEffect(() => {
    // Update CSS variables when the theme changes
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navLinks = (
    <>
      <div
        className={`
          ${styles.navItem} ${isActive("/") ? styles.active : ""}
        `}
      >
        <Link href="/">Home</Link>
      </div>
      <div
        className={`${styles.navItem} ${
          (isActive("/blog") || isBlogPost()) ? styles.active : ""
        } md:ml-3`}
      >
        <Link href="/blog">Blog</Link>
      </div>
      <div className={`${styles.navItem} ${isActive('/notes') || isNotes() ? styles.active : ""} md:ml-3`}>
        <Link href="/notes">Notes</Link>
      </div>
      <ToggleSwitch />
    </>
  );

  return (
    <div className="lg:sticky lg:top-0 border-b border-border bg-background/95 text-foreground shadow-sm z-40">
      <nav
        className="navbar flex flex-wrap justify-between items-center gap-8 sm:gap-4 py-4 px-6 sm:px-8 lg:px-24 xl:px-32"
      >
        <div className="flex-shrink-0 flex items-center gap-8 sm:gap-4">
          <Image
            src="/images/logo/KT.png" 
            alt={""}
            width={52}
            height={52}       
          />
          <div className="font-display font-bold text-xl tracking-tight">
            <Link href="/">
              Kevin Toh
            </Link>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              className="md:hidden"
              aria-label="Open main menu"
            >
              <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Kevin Toh</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-6">
              <SheetClose asChild>
                <Link href="/">Home</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/blog">Blog</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/notes">Notes</Link>
              </SheetClose>
              <ToggleSwitch />
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="hidden w-full md:block md:w-auto" id="navbar-menu">
          <div className="flex flex-col md:flex-row md:items-center gap-12 sm:gap-4">
            {navLinks}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
