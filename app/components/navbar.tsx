import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/navigation.module.css";
import ToggleSwitch from "./switch";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect } from "react";

const NavigationBar = (): JSX.Element => {
  const { isDarkMode } = useTheme() ?? {};
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const isBlogPost = () => pathname.startsWith("/blog");

  useEffect(() => {
    // Update CSS variables when the theme changes
    document.documentElement.style.setProperty(
      "--navItem-color",
      isDarkMode ? "white" : "black",
    );
    document.documentElement.style.setProperty(
      "--navItem-after-background",
      isDarkMode ? "transparent" : "lightgray",
    );
    document.documentElement.style.setProperty(
      "--navItem-active-after-background",
      isDarkMode ? "white" : "black",
    );
    document.documentElement.style.setProperty(
      "--navbar-color",
      isDarkMode ? "white" : "black",
    );
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="lg:sticky lg:top-0 z-40">
      <nav
        className={`${
          isDarkMode ? "bg-deepblue-100" : "bg-light-100"
        } navbar flex justify-end items-center gap-8 sm:gap-4 py-6 px-6 sm:px-8 lg:px-24 xl:px-32`}
      >
        <div
          className={`${styles.navItem} ${isActive("/") ? styles.active : ""}`}
        >
          <Link href="/">Home</Link>
        </div>
        <div
          className={`${styles.navItem} ${
            isActive("/blog") || isBlogPost() ? styles.active : ""
          }`}
        >
          <Link href="/blog">Blog</Link>
        </div>
        <ToggleSwitch />
      </nav>
    </div>
  );
};

export default NavigationBar;
