import styles from "./servicesCards.module.css";

const cards = [
    {
        id: 1,
        title: "01.",
        text: "Понимаем, что вам нужно",
    },
    {
        id: 2,
        title: "02.",
        text: "Предлагаем оптимальный путь",
    },
    {
        id: 3,
        title: "03.",
        text: "Двигаемся по этапам, без задержек",
    },
    {
        id: 4,
        title: "04.",
        text: "После релиза не исчезаем",
    }
]

export default function ServicesCards() {
    return (
        <div className={styles.cards}>
            <ul>
                {cards.map((item) => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}