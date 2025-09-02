import styles from "./headerOfSectionComponent.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HeaderOfSectionComponent({ imageSrc, alt, title, linkHref }: {
    imageSrc: string;
    alt: string;
    title: string;
    linkHref: string;
}) {
    return (
        <div className={styles.headerOfSection}>
            <Image
                className={styles.headerOfSectionImage}
                src={imageSrc}
                alt={alt}
                width={220}
                height={200}
                style={{ maxWidth: "100%" }}
            />
            <h4>{title}</h4>
            <Link href={linkHref}>
                <button>SHOP</button>
            </Link>
        </div>
    );
}