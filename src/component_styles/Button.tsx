"use client";
import Link from "next/link";
import style from "./button.module.css";
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

export default function Button({
  onClick,
  className = "",
  type = "button",
  buttonName = "See Product",
  path = "",
}: {
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  buttonName?: React.ReactNode;
  path?: string;
}) {
  return (
    <Link href={path}>
      <button
        type={type}
        onClick={onClick}
        className={`${style.button} ${className}`}
      >
        {buttonName}
      </button>
    </Link>
  );
}
