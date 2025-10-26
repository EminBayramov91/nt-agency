import styles from "./formSuccess.module.css";

export default function FormSuccess() {
    return (
        <div className={styles.success}>
            <h3>заявка принята</h3>
            <p>Ваша заявка принята. Мы свяжемся с Вами в ближайшее время.</p>
        </div>
    );
}