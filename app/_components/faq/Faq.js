import style from "./faq.module.css";
import SectionIntro from "@/app/_components/sectionIntro/SectionIntro";
import Accordion from "@/app/_components/accordion/Accordion";

const firstArray = [
    {
        id: 1,
        title: "С чего всё начинается?",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: "accordion-arrow.svg"
    },
    {
        id: 2,
        title: "берёте мелкие проекты?",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: "accordion-arrow.svg"
    },
    {
        id: 3,
        title: "А если всё срочно?",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: "accordion-arrow.svg"
    }
]

const secondArray = [
    {
        id: 1,
        title: "Что будет после запуска?",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: "accordion-arrow.svg"
    },
    {
        id: 2,
        title: "только дизайн/разработка",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: "accordion-arrow.svg"
    },
    {
        id: 3,
        title: "Правки по ходу работы?",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: "accordion-arrow.svg"
    }
]

export default function Faq() {
    return (
        <section className={style.faq}>
            <SectionIntro
                title="Вопросы, которые нам задают"
                text="А мы отвечаем, чтобы сразу прояснить."
                width="880px"
                textWidth="447px"
            />
            <div className={style.inner}>
                <Accordion array={firstArray} width="858px" size="18px"/>
                <Accordion array={secondArray} width="858px" size="18px"/>
            </div>
        </section>
    )
}