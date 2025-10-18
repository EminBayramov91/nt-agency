import styles from "./header.module.css";
import Container from "@/app/_components/container/Container";
import Image from "next/image";
import Button from "@/app/_components/button/Button";
import Logo from "@/app/_components/logo/Logo";

export default function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <Logo />
                    <Button
                        width="269px"
                        height="48px"
                        type="button"
                    >
                        Обсудить идею
                    </Button>
                </div>
            </Container>
        </header>
    )
}