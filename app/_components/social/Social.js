"use client"
import styles from "./social.module.css"
import Link from "next/link";
const isMobile = typeof window !== "undefined" && /iPhone|Android/i.test(navigator.userAgent);


export default function Social({ type }) {
    const openViber = (phone) => {
        const viberUrl = `viber://chat?number=${phone}`;
        const fallbackUrl = "https://www.viber.com/download/";
        if (isMobile) window.location.href = viberUrl;
        setTimeout(() => {
            window.open(fallbackUrl, "_blank");
        }, 1000);
    };

    const links = [
        {
            id: "1",
            title: "Linkedin",
            src: "https://www.linkedin.com/company/n-and-t-agency/about/?viewAsMember=true"
        },
        {
            id: "2",
            title: "telegram",
            src: "https://t.me/tatibr_dsgn"
        },
        {
            id: "3",
            title: "viber",
            action: () => openViber("+375291805662"),
        },
        {
            id: "4",
            title: "whatsapp",
            src: "https://wa.me/375291805662"
        },
    ]

    return (
        <ul className={`${styles.social} ${styles[type]}`}>
            {links.map((link) => (
                <li key={link.id}>
                    {link.action ? (
                        <button
                            onClick={link.action}
                            className={styles.linkButton}
                        >
                            {link.title}
                        </button>
                    ) : (
                        <Link href={link.src} rel="noopener noreferrer" target="_blank">
                            {link.title}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    )
}