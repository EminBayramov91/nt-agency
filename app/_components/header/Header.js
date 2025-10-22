"use client";
import styles from "./header.module.css";
import Logo from "@/app/_components/logo/Logo";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "@/app/_context/AppContext";

export default function Header() {
    const [state, dispatch] = useContext(AppContext);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handlerScroll = () => {
            setScrolled(window.scrollY > 0);
        }
        window.addEventListener("scroll", handlerScroll);
        handlerScroll();
        return () => window.removeEventListener("scroll", handlerScroll);
    }, [])

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
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