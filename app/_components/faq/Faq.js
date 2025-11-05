import style from "./faq.module.css";
import SectionIntro from "@/app/_components/sectionIntro/SectionIntro";
import Accordion from "@/app/_components/accordion/Accordion";
import {useEffect, useState} from "react";

const firstArray = [
    {
        id: "f1",
        title: "С чего всё начинается?",
        text: ["С диалога. С Вас задача и бизнес-цель, с нас понятный план.", "Чёткий процесс, понятные этапы, без сложных слов."],
        src: "accordion-arrow.svg"
    },
    {
        id: "f2",
        title: "берёте мелкие проекты?",
        text: ["Берём. Не гонимся за цифрами, нам важно сделать хорошо.", "Помогаем стартапам и малому бизнесу запустить сайт или бренд."],
        src: "accordion-arrow.svg"
    },
    {
        id: "f3",
        title: "А если всё срочно?",
        text: ["Срочные проекты по дизайну и разработке — возможно, но в разумных рамках. Если задача выполнимая, а сроки — не “на завтра к утру”. Чётко планируем и берём в работу."],
        src: "accordion-arrow.svg"
    }
]

const secondArray = [
    {
        id: "s1",
        title: "Что будет после запуска?",
        text: ["После запуска не пропадаем. Следим, чтобы сайт работал стабильно и рос вместе с вами."],
        src: "accordion-arrow.svg"
    },
    {
        id: "s2",
        title: "только дизайн/разработка",
        text: ["Можно. Но круче, когда мы ведём проект полностью — так результат сильнее. ", "Делаем и частичные задачи тоже."],
        src: "accordion-arrow.svg"
    },
    {
        id: "s3",
        title: "Правки по ходу работы?",
        text: ["Всегда закладываем гибкость. Прозрачный процесс: созвонились — уточнили — продолжаем делать ваш сайт или приложение лучше."],
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