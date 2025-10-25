import styles from "./form.module.css";
import Button from "@/app/_components/button/Button";
import PhoneField from "@/app/_components/phoneField/PhoneField";
import {useState} from "react";


export default function Form() {
    const [focusedInput, setFocusedInput] = useState(null);
    return (
        <form className={styles.form}>
            <label
                htmlFor="name"
                className={focusedInput === "name" ? styles.labelFocused : ""}
            >
                Ваше имя
            </label>
            <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Имя"
                spellCheck="false"
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
            />
            <label
                htmlFor="phone"
                className={focusedInput === "phone" ? styles.labelFocused : ""}
            >
                Контакт для связи
            </label>
            <PhoneField focusedInput={focusedInput} setFocusedInput={setFocusedInput} />
            <label
                htmlFor="text"
                className={focusedInput === "text" ? styles.labelFocused : ""}
            >
                Пара строк о проекте
            </label>
            <textarea
                name="text"
                id="text"
                placeholder="Ваши комментарии"
                onFocus={() => setFocusedInput("text")}
                onBlur={() => setFocusedInput(null)}
            >
            </textarea>
            <label className={styles.checkbox} htmlFor="check">
                <input id="check" type="checkbox"/>
                Даю согласие на обработку персональных данных
            </label>
            <Button type="submit">Обсудить идею</Button>
        </form>
    );
}