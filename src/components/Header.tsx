"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/#service", label: "サービス" },
  { href: "/#support", label: "支援内容" },
  { href: "/#pricing", label: "料金" },
  { href: "/#flow", label: "導入の流れ" },
  { href: "/column", label: "コラム" },
  { href: "/company", label: "会社情報" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          {siteConfig.serviceName}
          <span className={styles.logoEn}>BANSO DX</span>
        </Link>

        <nav className={styles.nav} aria-label="グローバルナビゲーション">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className="btn btnOutline">
            無料相談
          </Link>
          <Link href="/contact" className="btn btnPrimary">
            お問い合わせ
          </Link>
        </div>

        <button
          type="button"
          className={`${styles.menuToggle} ${open ? styles.menuToggleOpen : ""}`}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          <ul className={styles.mobileList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <Link href="/contact" className="btn btnOutline" onClick={() => setOpen(false)}>
              無料相談
            </Link>
            <Link href="/contact" className="btn btnPrimary" onClick={() => setOpen(false)}>
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
