import styles from "./heroArrow.module.css";
import Image from "next/image";
import {useContext} from "react";
import {AppContext} from "@/app/_context/AppContext";
export default function HeroArrow() {
    const [state, dispatch] = useContext(AppContext);

    return (
        <button type="button" className={styles.arrow}>
            <Image
                src="hero-arrow.svg"
                alt="hero arrow"
                width="105"
                height="105"
                onClick={() => dispatch({ type: "SCROLL_TO", payload: "promo"})}
            />
            {/*<span className={styles.loader}></span>*/}
        </button>
    )
}