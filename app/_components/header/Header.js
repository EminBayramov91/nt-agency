"use client";
import styles from "./header.module.css";
import Container from "@/app/_components/container/Container";
import Logo from "@/app/_components/logo/Logo";
import {useContext} from "react";
import {AppContext} from "@/app/_context/AppContext";

export default function Header() {
    const [state, dispatch] = useContext(AppContext);

    return (
        <header className={styles.header}>
            <Logo/>
            <button
                type="button"
                onClick={() => dispatch({type: "OPEN_POPUP"})}
            >
                Обсудить идею
            </button>
        </header>
    );
}