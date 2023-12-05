import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from '@/styles/social.module.css'

export default function SocialMediaIcons() {
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
