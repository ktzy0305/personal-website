import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/navigation.module.css";
import ToggleSwitch from "./switch";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect, useState } from "react";

const NavigationBar = (): JSX.Element => {
  const { isDarkMode } = useTheme() ?? {};
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const isBlogPost = () => pathname.startsWith("/blog");
  const isNotes = () => pathname.startsWith("/notes");

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

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
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="lg:sticky lg:top-0 shadow-lg z-40">
      <nav
        className={`${
          isDarkMode ? "bg-deepblue-100" : "bg-light-100"
        } navbar flex flex-wrap justify-between items-center gap-8 sm:gap-4 py-4 px-6 sm:px-8 lg:px-24 xl:px-32`}
      >
        <div className="flex-shrink-0 flex items-center gap-8 sm:gap-4">
          <Image
            src="/images/logo/KT.png" 
            alt={""}
            width={52}
            height={52}       
          />
          <div className="font-bold text-xl">
            <Link href="/">
              Kevin Toh
            </Link>
          </div>
        </div>

        <button 
          data-collapse-toggle="navbar-menu" 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-menu" 
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg 
            className="w-5 h-5" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 17 14"
          >
            <path 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        
        <div className={`${isMenuOpen ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-menu">
          <div className="flex flex-col md:flex-row md:items-center gap-12 sm:gap-4">
            <div
              className={`
                ${styles.navItem} ${isActive("/") ? styles.active : ""
              }`}
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
            {/* <div className={`${styles.navItem} ${isActive('/publications') || isPublications() ? styles.active : ""}`}>
              <Link href="/publications">Publications</Link>
            </div> */}
            <ToggleSwitch />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
