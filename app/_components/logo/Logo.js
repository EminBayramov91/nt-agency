import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src="Logo.svg"
                alt="Header Logo"
                width="69"
                height="40"
            />
        </Link>
    )
}