import styles from "./services.module.css";
import SectionIntro from "@/app/_components/sectionIntro/SectionIntro";
import ServicesCards from "@/app/_components/servicesCards/ServicesCards";

export default function Services() {
    return (
        <section className={styles.services}>
            <SectionIntro
                title="Простая и прозрачная работа"
                text="Всё просто"
                type="services"
            />
            <ServicesCards />
        </section>
    )
}