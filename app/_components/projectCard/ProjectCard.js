import styles from "./projectCard.module.css";
import Image from "next/image";
export default function ProjectCard({ array }) {
    return (
        <>{
            array.map(item => (
                <div key={item.id}>
                    <div style={{ backgroundColor: item.background }} className={styles.card}>
                        <div className={styles.item}>
                            <h4>{item.title}</h4>
                            <p>{item.subtitle}</p>
                        </div>
                        <div className={styles.hidedItem}>
                            <Image
                                src={item.src}
                                alt="card image"
                                fill
                            />
                            <h4>{item.title}</h4>
                            <div className={styles.textInner}>
                                <p>{item.subtitle}</p>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    </div>

                </div>
            ))
        }</>

    )
}