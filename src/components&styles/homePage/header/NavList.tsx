"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavList.module.css";
import { usePathname } from "next/navigation";
// import { useEffect } from "react";

export const NavList = ({
  setMenuOpen,
  classOne = "",
  classTwo = "",
  classNavList = "",
}: {
  setMenuOpen?: (open: boolean) => void;
  classOne?: string;
  classTwo?: string;
  classNavList?: string;
}) => {
  const pathname = usePathname();
  const handleMenuLinkClick = () => {
    // ?> გამოიყენება ფუქციასთან და ამბობს თუ არ გადმოეცა არაფერი გაატარე ეს ხაზი.
    setMenuOpen?.(false);
  };
  const menuLinks = [
    { href: "/", label: "HOME" },
    { href: "/headphones", label: "HEADPHONES" },
    { href: "/speakers", label: "SPEAKERS" },
    { href: "/earphones", label: "EARPHONES" },
  ];
  return (
    <div className={`${styles.navListContainer} ${classOne}`}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/audiophile-logo.svg"
          alt="Audiophile Logo"
          width={143}
          height={25}
          className={styles.logoImage}
        />
      </Link>
      <nav className={`${styles.firstMenuNav} ${classTwo}`}>
        <ul className={`${styles.navList} ${classNavList}`}>
          {menuLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.active : ""
                } test`}
                onClick={handleMenuLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
