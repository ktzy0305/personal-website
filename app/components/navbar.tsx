import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from '../../styles/navigation.module.css'

const NavigationBar = (): JSX.Element => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="lg:sticky lg:top-0 z-40">
      <nav className="flex justify-end items-center bg-deepblue-100 gap-8 sm:gap-4 py-6 px-6 sm:px-8 lg:px-24 xl:px-32">
        <div className={`${styles.navItem} ${isActive('/') ? styles.active : ''}`}>
          <Link href="/">Home</Link>
        </div>
        <div className={`${styles.navItem} ${isActive('/blog') ? styles.active : ''}`}>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar;