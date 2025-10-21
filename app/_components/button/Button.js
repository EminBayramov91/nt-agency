import styles from "./button.module.css";
export default function Button({ children, width, height, type, onClick }) {
    return (
        <button
            className={styles.button}
            style={{ width: width, height: height }}
            type={type}
            onClick={onClick ? onClick : undefined}
        >
            {children}
        </button>
    )
}