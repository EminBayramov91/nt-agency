import styles from "./social.module.css"
import Link from "next/link";

const links = [
    {
        id: "1",
        title: "Linkedin",
        src: "/"
    },
    {
        id: "2",
        title: "telegram",
        src: "/"
    },
    {
        id: "3",
        title: "viber",
        src: "/"
    },
    {
        id: "4",
        title: "whatsapp",
        src: "/"
    },
]

export default function Social({ type }) {
    return (
        <ul className={`${styles.social} ${styles[type]}`}>
            {
                links.map(link => (
                    <li key={link.id}>
                        <Link href={link.src} target="_blank">{link.title}</Link>
                    </li>
                ))
            }
        </ul>
    )
}