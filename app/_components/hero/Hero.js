import styles from "./hero.module.css";
import Video from "@/app/_components/video/Video";
import Container from "@/app/_components/container/Container";
import HeroArrow from "@/app/_components/heroArrow/HeroArrow";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Video />
            <Container>
                <h1 className={styles.title}>
                    <span>Здесь собирают продукты</span>
                </h1>
            </Container>
            <HeroArrow />
        </div>
    )
}