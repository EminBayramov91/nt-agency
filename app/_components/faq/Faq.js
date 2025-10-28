import style from "./faq.module.css";
import SectionIntro from "@/app/_components/sectionIntro/SectionIntro";
import Accordion from "@/app/_components/accordion/Accordion";
import {useEffect, useState} from "react";

const firstArray = [
    {
        id: "f1",
        title: "С чего всё начинается?",
        text: "С простого. Вы рассказываете, что хотите, мы уточняем детали и предлагаем, как это лучше реализовать. Всё быстро и без воды.",
        src: "accordion-arrow.svg"
    },
    {
        id: "f2",
        title: "берёте мелкие проекты?",
        text: "Берём. Не гонимся за цифрами, нам важно сделать хорошо.",
        src: "accordion-arrow.svg"
    },
    {
        id: "f3",
        title: "А если всё срочно?",
        text: "Сделаем. Если задача выполнимая, а сроки — не “на завтра к утру”. Чётко планируем и берём в работу.",
        src: "accordion-arrow.svg"
    }
]

const secondArray = [
    {
        id: "s1",
        title: "Что будет после запуска?",
        text: "Не исчезаем. Можем сопровождать, чинить и развивать продукт дальше.",
        src: "accordion-arrow.svg"
    },
    {
        id: "s2",
        title: "только дизайн/разработка",
        text: "Можно. Но честно — мы любим, когда ведём весь проект. Так меньше каши, больше результата. Если надо один этап — сделаем и его хорошо.",
        src: "accordion-arrow.svg"
    },
    {
        id: "s3",
        title: "Правки по ходу работы?",
        text: "Всегда закладываем гибкость: вы можете вносить правки, мы — подстраиваемся. Главное — быть на связи и делать это по делу.",
        src: "accordion-arrow.svg"
    }
]

export default function Faq() {
    const [activeId, setActiveId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 1400);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <section className={style.faq}>
            <SectionIntro
                title={["Вопросы, которые", " нам задают"]}
                text={["А мы отвечаем,", [" чтобы сразу прояснить."]]}
                type="faq"
            />
            <div className={style.inner}>
                <Accordion
                    array={firstArray}
                    type="faq"
                    activeId={activeId}
                    setActiveId={setActiveId}
                    isMobile={isMobile}
                />
                <Accordion
                    array={secondArray}
                    type="faq"
                    activeId={activeId}
                    setActiveId={setActiveId}
                    isMobile={isMobile}
                />
            </div>
        </section>
    )
}