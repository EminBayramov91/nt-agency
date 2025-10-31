"use client";
import styles from "@/app/styles/page.module.css";

import dynamic from "next/dynamic";

const Promo  = dynamic(() => import("@/app/_components/promo/Promo"), { ssr: false });
const Services  = dynamic(() => import("@/app/_components/services/Services"), { ssr: false });
const Projects  = dynamic(() => import("@/app/_components/projects/Projects"), { ssr: false });
const Faq  = dynamic(() => import("@/app/_components/faq/Faq"), { ssr: false });
const Contact  = dynamic(() => import("@/app/_components/contact/Contact"), { ssr: false });

import Hero from "@/app/_components/hero/Hero";
import Container from "@/app/_components/container/Container";

import {useContext, useEffect} from "react";
import {AppContext} from "@/app/_context/AppContext";

export default function Page() {
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        if (state.scrollTo) {
            const element = document.getElementById(state.scrollTo);
            if (element) {
                const offset = -100;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition + offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
                
                setTimeout(() => dispatch({ type: "RESET_SCROLL" }), 300)
            }
        }
    }, [state.scrollTo]);

    return (
        <div className={styles.page}>
            <Hero/>
            <Container>
                <Promo/>
                <Services />
                <Projects />
                <Faq />
                <Contact/>
            </Container>
        </div>
    );
}
