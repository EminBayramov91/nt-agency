"use client";
import styles from "./popup.module.css";
import Image from "next/image";
import Form from "@/app/_components/form/Form";
import Social from "@/app/_components/social/Social";
import {useContext, useEffect} from "react";
import {AppContext} from "@/app/_context/AppContext";
import FormSuccess from "@/app/_components/formSuccess/FormSuccess";
import FormError from "@/app/_components/formError/FormError";

export default function Popup() {
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        document.body.style.overflow = state.popupOpen ? "hidden" : "";
    }, [state.popupOpen])

    if (!state.popupOpen) return null;

    const renderContent = () => {
        switch (state.formStatus) {
            case "success":
                return <FormSuccess />
            case "error":
                return <FormError />
            case "idle":
                return (
                    <>
                        <Form/>
                        <Social type="popup"/>
                    </>
                )
            default:
                return (
                    <>
                        <Form/>
                        <Social type="popup"/>
                    </>
                )
        }
    }

    return (
        <div className={styles.popup} onClick={() => dispatch({ type: "CLOSE_POPUP" })}>
            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <Image
                    src="popup-close.svg"
                    alt="popup close button"
                    width="34"
                    height="34"
                    className={styles.popupImg}
                    onClick={() => {
                        if (state.formStatus === "error") {
                            dispatch({ type: "FORM_IDLE" });
                        } 
                        if (state.formStatus === "success") {
                            dispatch({ type: "FORM_IDLE" })
                            dispatch({ type: "CLOSE_POPUP" })
                        }else {
                            dispatch({ type: "CLOSE_POPUP" });
                        }
                    }}
                />
                {renderContent()}
            </div>
        </div>
    );
}
