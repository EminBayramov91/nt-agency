import styles from "./contact.module.css";
import Form from "@/app/_components/form/Form";
import SectionIntro from "@/app/_components/sectionIntro/SectionIntro"

export default function Contact() {
    return (
        <section className={styles.contact}>
            <SectionIntro
                title="всё начинается с одной строки"
                text="Просто расскажите суть, а мы подскажем, с чего начать."
                type="contact"
            />
            <Form />
        </section>
    )
}