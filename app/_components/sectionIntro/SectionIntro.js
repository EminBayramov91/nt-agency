import styles from "./sectionIntro.module.css";
export default function SectionIntro({ title, text, width, textWidth }) {
    return (
        <div style={{width: width}} className={styles.info}>
            <h3 className="title">{title}</h3>
            {textWidth
                ? <p style={{width: textWidth}} className="subtitle">{text}</p>
                : <p className="subtitle">{text}</p>
            }
        </div>
    )
}