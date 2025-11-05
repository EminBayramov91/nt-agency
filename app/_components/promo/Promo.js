import styles from "./promo.module.css";
import SectionIntro from "@/app/_components/sectionIntro/SectionIntro";
import Accordion from "@/app/_components/accordion/Accordion";
import {useState} from "react";

const accordionItems = [
    {
        id: 1,
        title: "Продуктовая логика",
        text: ["Превращаем идею в работающую структуру.", "UX-логика для сайтов и digital-продуктов"],
        src: "accordion-arrow.svg"
    },
    {
        id: 2,
        title: "дизайн",
        text: ["Пользовательский опыт без лишних слов.", "UX/UI дизайн, который приводит к результату"],
        src: "accordion-arrow.svg"
    },
    {
        id: 3,
        title: "Разработка",
        text: ["Никакой магии — только чистый код и выверенный стек для разработки сайтов и приложений"],
        src: "accordion-arrow.svg"
    },
    {
        id: 4,
        title: "Сопровождение",
        text: ["Мы с вами на длинной дистанции.", "Техническая поддержка и развитие продукта"],
        src: "accordion-arrow.svg"
    }
]

export default function Promo() {
    const [activeId, setActiveId] = useState(null)

    return (
        <section id="promo" className={styles.promo}>
            <SectionIntro
                title={["Берем на себя", " всё для запуска"]}
                text={["Каждый этап — с вниманием,", " а не для отчётности"]}
                type="promo"
            />
            <Accordion
                array={accordionItems}
                type="promo"
                activeId={activeId}
                setActiveId={setActiveId}
            />
        </section>
    )
}