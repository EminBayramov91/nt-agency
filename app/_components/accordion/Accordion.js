"use client";
import styles from "./accordion.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Accordion({ array, type, activeId, setActiveId, isMobile }) {
    const [localActive, setLocalActive] = useState(null);

    const toggleAccordion = (id) => {
        if (isMobile) {
            setActiveId(prev => (prev === id ? null : id));
        } else {
            setLocalActive(prev => (prev === id ? null : id));
        }
    };

    return (
        <div className={styles.accordion}>
            {array.map(item => {
                const isActive = isMobile ? activeId === item.id : localActive === item.id;

                return (
                    <div
                        key={item.id}
                        className={`${styles.inner} ${styles[type]} ${isActive ? styles.innerActive : ""}`}
                        onClick={() => toggleAccordion(item.id)}
                    >
                        <div className={`${styles.item} ${isActive ? styles.itemActive : ""}`}>
                            <h4>{item.title}</h4>
                            <Image
                                src={item.src}
                                alt="Accordion Arrow"
                                width="32"
                                height="32"
                            />
                        </div>
                        <p>{item.text}</p>
                    </div>
                );
            })}
        </div>
    );
}
