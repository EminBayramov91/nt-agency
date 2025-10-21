"use client";
import { useState, useEffect } from "react";
import styles from "./animatedText.module.css";

export default function AnimatedText({ texts, typingSpeed = 100, pause = 2000 }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (index === texts.length) setIndex(0);

        if (subIndex === texts[index]?.length + 1 && !deleting) {
            setTimeout(() => setDeleting(true), pause);
            return;
        }

        if (subIndex === 0 && deleting) {
            setDeleting(false);
            setIndex(prev => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex(prev => prev + (deleting ? -1 : 1));
        }, deleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting]);

    return (
        <h2 className={styles.text}>
            {texts[index]?.substring(0, subIndex)}
            <span className={styles.cursor}>|</span>
        </h2>
    );
}
