"use client";
import styles from "@/app/styles/page.module.css";
import Container from "@/app/_components/container/Container";
import Hero from "@/app/_components/hero/Hero";
import Contact from "@/app/_components/contact/Contact";
import Promo from "@/app/_components/promo/Promo";
import {useContext, useEffect} from "react";
import {AppContext} from "@/app/_context/AppContext";
import Services from "@/app/_components/services/Services";
import Faq from "@/app/_components/faq/Faq";
import Projects from "@/app/_components/projects/Projects";

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
