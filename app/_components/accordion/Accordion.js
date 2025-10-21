"use client"
import styles from "./accordion.module.css";
import Image from "next/image";
import {useState} from "react";

export default function Accordion({ array, width, size }) {
    const [activeId, setActiveId] = useState()

    const toggleAccordion = (id) => {
        setActiveId(prev => (prev === id ? null : id) )
    }

    return (
        <div className={styles.accordion}>
            {array.map(item => {
                const isActive = activeId === item.id;

                return (
                    <div
                        key={item.id}
                        className={`${styles.inner} ${isActive ? styles.innerActive : ""}`}
                        onClick={() => toggleAccordion(item.id)}
                        style={{ width: width }}
                    >
                        <div
                            className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
                        >
                            <h4 style={{ fontSize: size }}>{item.title}</h4>
                            <Image
                                src={item.src}
                                alt="Accordion Arrow"
                                width="32"
                                height="32"
                            />
                        </div>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}