import styles from "@/app/_components/formError/formError.module.css";

export default function FormError() {
    return (
        <div className={styles.error}>
            <h3>Ошибка отправки</h3>
            <p>Пожалуйста, попробуйте еще раз.</p>
        </div>
    )
}