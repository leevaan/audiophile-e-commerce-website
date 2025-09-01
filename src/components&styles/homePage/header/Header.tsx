"use client";
import Link from "next/link";
import styles from "./header.module.css";
// import Image from "next/image";
// Hooks
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavList } from "./NavList";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleMenuLinkClick = () => {
    setMenuOpen(false);
  };
  const menuLinks = [
    { href: "/", label: "HOME" },
    { href: "/headphones", label: "HEADPHONES" },
    { href: "/speakers", label: "SPEAKERS" },
    { href: "/earphones", label: "EARPHONES" },
  ];

  return (
    <header className={styles.header}>
      <div className={`containerSize ${styles.headerContainer} `}>
        <NavList setMenuOpen={setMenuOpen} classOne={styles.navList} />

        <nav className={styles.navListRight}>
          <ul className={`${styles.navList} ${styles.navListRight}`}>
            <li>
              <Link
                href="/register"
                className={`${styles.navLink} ${styles.test} ${
                  pathname === "/register" ? styles.active : ""
                }`}
              >
                REGISTER
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className={`${styles.navLink} ${styles.test} ${
                  pathname === "/login" ? styles.active : ""
                }`}
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </nav>
        <svg
          className={styles.burgerIcon}
          onClick={handleBurgerClick}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
        >
          <rect width="16" height="3" fill="white" />
          <rect y="6" width="16" height="3" fill="white" />
          <rect y="12" width="16" height="3" fill="white" />
        </svg>
      </div>
      {/* Overlay for closing menu on backdrop click */}
      {menuOpen && (
        <div
          className={styles.menuBackdrop}
          onClick={() => setMenuOpen(false)}
        />
      )}
      <nav className={styles.secondMenuNav}>
        <ul className={styles.navList}>
          {menuLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
                onClick={handleMenuLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className={styles.burgerMenuNav}
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <ul className={styles.burgerMenuList}>
          {menuLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
                onClick={handleMenuLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={`${styles.navListRight}`}>
          <li>
            <Link
              href="/register"
              className={`${styles.navLink} ${styles.test} ${
                pathname === "/register" ? styles.active : ""
              }`}
              onClick={handleMenuLinkClick}
            >
              REGISTER
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className={`${styles.navLink} ${styles.test} ${
                pathname === "/login" ? styles.active : ""
              }`}
              onClick={handleMenuLinkClick}
            >
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
