import styles from "./form.module.css";
import Button from "@/app/_components/button/Button";
import PhoneField from "@/app/_components/phoneField/PhoneField";


export default function Form() {
    return (
        <form className={styles.form}>
            <label htmlFor="name">Ваше имя</label>
            <input id="name" type="text" autoComplete="name" placeholder="Имя"/>
            <label htmlFor="phone">Контакт для связи</label>
            <PhoneField />
            <label htmlFor="text">Пара строк о проекте</label>
            <textarea name="text" id="text" placeholder="Ваши комментарии"></textarea>
            <label className={styles.checkbox} htmlFor="check">
                <input id="check" type="checkbox"/>
                Даю согласие на обработку персональных данных
            </label>
            <Button type="submit" width="600px" height="40px">Обсудить идею</Button>
        </form>
    );
}