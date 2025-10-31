"use client"
import styles from "./video.module.css";
export default function Video() {
    return (
        <video
            className={styles.video}
            muted
            autoPlay={true}
            controls={false}
            loop={true}
            playsInline
            preload="metadata"
            poster="/hero-bg.webp"
        >
            <source src="video.mp4" type="video/mp4" />
            <source src="video.mp4" type="video/mp4" />
        </video>
    )
}