import styles from "./button.module.css";
export default function Button({ children, width, height, type }) {
    return (
        <button
            className={styles.button}
            style={{ width: width, height: height }}
            type={type}
        >
            {children}
        </button>
    )
}