// "use client";
import type { Metadata } from "next";
// Components
import XX59Headphones from "@/components&styles/XX59Headphones/XX59Headphones";
import BackButton from "@/components&styles/BackButton";

export const metadata: Metadata = {
  title: "XX99 Mark II Headphones | Audiophile",
  description:
    "Discover the features and specifications of the XX99 Mark II Headphones.",
};

export default function XX59HeadphonesPage() {
  return (
    <section className={`containerSize`}>
      <BackButton />
      <XX59Headphones />
    </section>
  );
}
