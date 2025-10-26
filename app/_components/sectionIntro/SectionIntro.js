import styles from "./sectionIntro.module.css";
export default function SectionIntro({ title, text, type }) {
    return (
        <div className={`${styles.info} ${styles[type]}`}>
            <h3 className="title">
                {title.map((line, i) => (
                    <span key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
            </h3>
            <p className="subtitle">
                {text.map((line, i) => (
                    <span key={i}>{line}</span>
                ))}
            </p>
        </div>
    )
}