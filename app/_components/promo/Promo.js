import styles from "./promo.module.css";
import SectionIntro from "@/app/_components/sectionIntro/SectionIntro";
import Accordion from "@/app/_components/accordion/Accordion";

const accordionItems = [
    {
        id: 1,
        title: "Продуктовая логика",
        text: "Превращаем идею в работающую структуру",
        src: "accordion-arrow.svg"
    },
    {
        id: 2,
        title: "дизайн",
        text: "Пользовательский опыт без лишних слов",
        src: "accordion-arrow.svg"
    },
    {
        id: 3,
        title: "Разработка",
        text: "Никакой магии — только чистый код и выверенный стек",
        src: "accordion-arrow.svg"
    },
    {
        id: 4,
        title: "Сопровождение",
        text: "Мы с вами на длинной дистанции",
        src: "accordion-arrow.svg"
    }
]

export default function Promo() {
    return (
        <section id="promo" className={styles.promo}>
            <SectionIntro
                title={["Берем на себя", " все для запуска"]}
                text={["Каждый этап — с вниманием,", " а не для отчётности"]}
                type="promo"
            />
            <Accordion array={accordionItems} type="promo"/>
        </section>
    )
}