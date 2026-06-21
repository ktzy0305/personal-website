import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const links = [
  { href: "https://github.com/ktzy0305", label: "GitHub", Icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/kevintohhh/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://www.instagram.com/kevintohhh",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

export default function SocialMediaIcons() {
  return (
    <ul className="flex list-none gap-4 p-0">
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-colors duration-200 hover:text-brand"
          >
            <Icon size={22} />
          </a>
        </li>
      ))}
    </ul>
  );
}
