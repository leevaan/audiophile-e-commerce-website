"use client";
import styles from "./backButton.module.css";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 2) {
      router.back();
    } else {
      router.push("/"); // fallback გვერდი, მაგალითად მთავარი
    }
  };

  return (
    <span onClick={handleBack} className={styles.backButton}>
      Go Back
    </span>
  );
}
