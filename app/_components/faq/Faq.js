import style from "./faq.module.css";
import SectionIntro from "@/app/_components/sectionIntro/SectionIntro";
import Accordion from "@/app/_components/accordion/Accordion";

const firstArray = [
    {
        id: 1,
        title: "С чего всё начинается?",
        text: "С простого. Вы рассказываете, что хотите, мы уточняем детали и предлагаем, как это лучше реализовать. Всё быстро и без воды.",
        src: "accordion-arrow.svg"
    },
    {
        id: 2,
        title: "берёте мелкие проекты?",
        text: "Берём. Не гонимся за цифрами, нам важно сделать хорошо.",
        src: "accordion-arrow.svg"
    },
    {
        id: 3,
        title: "А если всё срочно?",
        text: "Сделаем. Если задача выполнимая, а сроки — не “на завтра к утру”. Чётко планируем и берём в работу.",
        src: "accordion-arrow.svg"
    }
]

const secondArray = [
    {
        id: 1,
        title: "Что будет после запуска?",
        text: "Не исчезаем. Можем сопровождать, чинить и развивать продукт дальше.",
        src: "accordion-arrow.svg"
    },
    {
        id: 2,
        title: "только дизайн/разработка",
        text: "Можно. Но честно — мы любим, когда ведём весь проект. Так меньше каши, больше результата. Если надо один этап — сделаем и его хорошо.",
        src: "accordion-arrow.svg"
    },
    {
        id: 3,
        title: "Правки по ходу работы?",
        text: "Всегда закладываем гибкость: вы можете вносить правки, мы — подстраиваемся. Главное — быть на связи и делать это по делу.",
        src: "accordion-arrow.svg"
    }
]

export default function Faq() {
    return (
        <section className={style.faq}>
            <SectionIntro
                title={["Вопросы, которые", " нам задают"]}
                text={["А мы отвечаем,", [" чтобы сразу прояснить."]]}
                type="faq"
            />
            <div className={style.inner}>
                <Accordion array={firstArray} type="faq"/>
                <Accordion array={secondArray} type="faq"/>
            </div>
        </section>
    )
}