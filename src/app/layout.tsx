import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
// Components
import Header from "@/component_styles/homePage/header/Header";
import FooterUpContent from "@/component_styles/footerUpContent/FooterUpContent";
import Footer from "@/component_styles/footer/Footer";
// import Test from "@/components&styles/Test";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Audiophile E-Commerce",
  description: "Audiophile e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <Header />
        <main>
          {children}
          {/* <Test forHompPage={styles.forHompPage} /> */}
          <FooterUpContent />
        </main>
        <Footer />
      </body>
    </html>
  );
}
