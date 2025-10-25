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
        >
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}