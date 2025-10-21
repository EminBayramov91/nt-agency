"use client"
import styles from "./header.module.css";
import Container from "@/app/_components/container/Container";
import Button from "@/app/_components/button/Button";
import Logo from "@/app/_components/logo/Logo";
import {useContext} from "react";
import {AppContext} from "@/app/_context/AppContext";

export default function Header() {

    const [state, dispatch] = useContext(AppContext);

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <Logo />
                    <Button
                        width="269px"
                        height="48px"
                        type="button"
                        onClick={() => dispatch({ type: "OPEN_POPUP" })}
                    >
                        Обсудить идею
                    </Button>
                </div>
            </Container>
        </header>
    )
}