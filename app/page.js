import styles from "./_styles/page.module.css";
import Container from "@/app/_components/container/Container";
import Hero from "@/app/_components/hero/Hero";

export default function Home() {
  return (
      <div className={styles.page}>
          <Hero />
        <Container>
        </Container>
      </div>
  )
}
