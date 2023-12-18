import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from '@/styles/social.module.css'
import { useTheme } from '../contexts/ThemeContext';
import { useEffect } from 'react';

export default function SocialMediaIcons() {
  const { isDarkMode } = useTheme() ?? {};

  useEffect(() => {
    // Update CSS variables when the theme changes
    document.documentElement.style.setProperty('--icon-color', isDarkMode ? '#B9B9B9' : '#606060');
    document.documentElement.style.setProperty('--icon-hover-color', isDarkMode ? '#ffffff' : '#A0A0A0');
  }, [isDarkMode])

  return (
    <ul className='list-none p-0 flex'>
      <li className='mr-4'>
        <a className={styles.icon} href="https://github.com/ktzy0305" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
      </li>
      <li className='mr-4'>
        <a className={styles.icon} href="https://www.linkedin.com/in/kevintohhh/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
      </li>
      <li>
        <a className={styles.icon} href="https://www.instagram.com/kevintohhh" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} />
        </a>
      </li>
    </ul>
  );
};
