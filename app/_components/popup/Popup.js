"use client";
import styles from "./popup.module.css";
import Image from "next/image";
import Form from "@/app/_components/form/Form";
import Social from "@/app/_components/social/Social";
import {useContext, useEffect} from "react";
import {AppContext} from "@/app/_context/AppContext";

export default function Popup() {
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        if (state.popupOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [state.popupOpen])

    if (!state.popupOpen) return null;

    return (
        <div className={styles.popup} onClick={() => dispatch({ type: "CLOSE_POPUP" })}>
            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <Image
                    src="popup-close.svg"
                    alt="popup close button"
                    width="34"
                    height="34"
                    className={styles.popupImg}
                    onClick={() => dispatch({type: "CLOSE_POPUP"})}
                />
                <Form/>
                <div className={styles.bottom}>
                    <span className={styles.popupSpan}>Или напишите нам:</span>
                    <Social centered="center"/>
                </div>
            </div>
        </div>
    );
}
