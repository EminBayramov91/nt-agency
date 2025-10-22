import styles from "./button.module.css";
export default function Button({ children, type, onClick }) {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick ? onClick : undefined}
        >
            {children}
        </button>
    )
}