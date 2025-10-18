import styles from "./heroArrow.module.css";
import Image from "next/image";
import Link from "next/link";
export default function HeroArrow() {
    return (
        <button type="button" className={styles.arrow}>
            <Image
                src="hero-arrow.svg"
                alt="hero arrow"
                width="105"
                height="105"
            />
            {/*<span className={styles.loader}></span>*/}
        </button>
    )
}