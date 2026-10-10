"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "ホーム", href: "/figma-hp", active: true },
  { label: "メンバー", href: "#" },
  { label: "サービス", href: "#" },
  { label: "ブログ", href: "#" },
  { label: "お問い合わせ", href: "#" },
];

function Logo() {
  return (
    <Link href="/figma-hp" className="flex items-center gap-2 shrink-0">
      <span className="flex size-7 lg:size-8 items-center justify-center rounded bg-[#0a1c36]">
        <span className="font-heading text-[16px] lg:text-[18px] font-bold text-white">
          N
        </span>
      </span>
      <span className="flex flex-col gap-px leading-none">
        <span className="font-heading text-[15px] lg:text-[18px] font-bold text-[#0a1c36]">
          NEXUS
        </span>
        <span className="text-[9px] font-medium text-[#4b5563]">
          ネクサス株式会社
        </span>
      </span>
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5L19 19M5 19L19 5"
          stroke="#0A1C36"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.0008 4.9992H19.9992M4.0008 12H19.9992M4.0008 19.0008H19.9992"
        stroke="#0A1C36"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white">
      <div className="flex w-full items-center justify-between px-5 py-4 lg:px-20 lg:py-0 lg:h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-start justify-center gap-1"
            >
              <span
                className={
                  item.active
                    ? "text-[14px] font-bold text-[#0a1c36]"
                    : "text-[14px] font-medium text-[#111827]"
                }
              >
                {item.label}
              </span>
              {item.active && (
                <span className="h-[2px] w-4 rounded-full bg-[#0a1c36]" />
              )}
            </Link>
          ))}
        </nav>

        <Link
          href="#"
          className="hidden lg:flex items-center rounded bg-[#0a1c36] px-5 py-2.5"
        >
          <span className="text-[13px] font-semibold text-white whitespace-nowrap">
            資料請求・お問い合わせ
          </span>
        </Link>

        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center p-2 lg:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-[#e5e7eb] px-5 py-4 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={
                item.active
                  ? "py-3 text-[15px] font-bold text-[#0a1c36]"
                  : "py-3 text-[15px] font-medium text-[#111827]"
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded bg-[#0a1c36] px-5 py-3"
          >
            <span className="text-[14px] font-semibold text-white">
              資料請求・お問い合わせ
            </span>
          </Link>
        </nav>
      )}
    </header>
  );
}
