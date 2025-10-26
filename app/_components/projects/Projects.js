import styles from "./projects.module.css";
import SectionIntro from "@/app/_components/sectionIntro/SectionIntro";
import ProjectCard from "@/app/_components/projectCard/ProjectCard";

const cards = [
    {
        id: 1,
        title: "ELBA",
        subtitle: "Система онлайн-бронирования",
        description: "Чистый интерфейс, понятный процесс для гостей, удобная панель для администраторов. Мы спроектировали UX, визуальную систему и адаптацию под мобильные сценарии.",
        src: "/elba.jpg",
        background: "#000000"
    },
    {
        id: 2,
        title: "ARK tech",
        subtitle: "Инфраструктурная платформа для HoReCa.",
        description: "Система для тех, кто запускает отели и другие объекты с нуля. Управление бронированием, персоналом, аналитикой — в одной точке. Спроектировали интерфейс с учётом разных ролей пользователей и встроенного ИИ.",
        src: "/arkTech.jpg",
        background: "#0066FF"
    },
    {
        id: 3,
        title: "Unhosted",
        subtitle: "Кошелёк без посредников",
        description: "Self-custody кошелёк с простым входом, понятной логикой и интерфейсом без криптохаоса. Всё, что нужно — на экране. Всё, что важно — у пользователя.",
        src: "/unHosted.jpg",
        background: "#000000"
    }
]


export default function Projects() {
    return (
        <section className={styles.projects}>
            <SectionIntro
                title={["Реальные проекты <span class='dash'>—</span>", " под реальные задачи"]}
                text={["Делаем продукты, которые решают"]}
                type="projects"
            />
            <div className={styles.inner}>
                <ProjectCard array={cards}/>
            </div>
        </section>
    )
}