import styles from "./footer.module.css";
import Container from "@/app/_components/container/Container";
import Image from "next/image";
import Social from "@/app/_components/social/Social";
import Copy from "@/app/_components/copy/Copy";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <Image
                    src="n-t-agency.svg"
                    alt="footer logo"
                    width="1746"
                    height="175"
                />
                <div className={styles.bottom}>
                    <Social />
                    <Copy />
                </div>
            </Container>
        </footer>
    )
}