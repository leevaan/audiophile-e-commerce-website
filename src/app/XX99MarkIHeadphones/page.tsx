// "use client";
import type { Metadata } from "next";
// import { PageProps } from "@/components&styles/Types";
// Components
import XX99MarkIHeadphones from "@/components&styles/XX99MarkIHeadphones/XX99MarkIHeadphones";
import BackButton from "@/components&styles/BackButton";

export const metadata: Metadata = {
  title: "XX99 Mark II Headphones | Audiophile",
  description:
    "Discover the features and specifications of the XX99 Mark II Headphones.",
};

export default function XX99MarkIHeadphonesPage() {
  return (
    <section className={`containerSize`}>
      <BackButton />
      <XX99MarkIHeadphones />
    </section>
  );
}
