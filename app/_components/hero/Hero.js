import styles from "./hero.module.css";
import Video from "@/app/_components/video/Video";
import Container from "@/app/_components/container/Container";
import HeroArrow from "@/app/_components/heroArrow/HeroArrow";
import AnimatedText from "@/app/_components/animatedText/AnimatedText";

const phrases = [
    "digital-продукты",
    "мобильные интерфейсы",
    "веб-сервисы",
    "айдентика бренда",
    "и не только"
];

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Video />
            <Container>
                <h1 className={styles.title}>
                    <span>Здесь собирают продукты</span>
                </h1>
                <AnimatedText texts={phrases} typingSpeed={100} pause={2000}/>
            </Container>
            <HeroArrow />
        </div>
    )
}