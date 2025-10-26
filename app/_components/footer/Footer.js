import styles from "./footer.module.css";
import Container from "@/app/_components/container/Container";
import Image from "next/image";
import Social from "@/app/_components/social/Social";
import Copy from "@/app/_components/copy/Copy";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <picture>
                    <source srcSet="n-t-agency-m.svg" media="(max-width: 800px)"/>
                    <Image
                        src="n-t-agency.svg"
                        alt="footer logo"
                        width="1746"
                        height="175"
                    />
                </picture>
                <div className={styles.bottom}>
                    <Social type="footer"/>
                    <Copy/>
                </div>
            </Container>
        </footer>
    )
}