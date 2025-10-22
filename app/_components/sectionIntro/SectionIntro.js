import styles from "./sectionIntro.module.css";
export default function SectionIntro({ title, text, type }) {
    return (
        <div className={`${styles.info} ${styles[type]}`}>
            <h3 className="title">{title}</h3>
            <p className="subtitle">{text}</p>
        </div>
    )
}