"use client"
import styles from "./form.module.css";
import Button from "@/app/_components/button/Button";
import PhoneField from "@/app/_components/phoneField/PhoneField";
import {useContext, useState} from "react";
import {AppContext} from "@/app/_context/AppContext";


export default function Form() {
    const [state, dispatch] = useContext(AppContext);
    const [focusedInput, setFocusedInput] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        text: "",
        check: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === "checkbox" ? checked : value,
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim() || formData.name.length < 2) newErrors.name = true;
        if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = true;
        if (!formData.text.trim() || formData.text.length < 5) newErrors.text = true;
        if (!formData.check) newErrors.check = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch({type: "FORM_SUCCESS"})
            setFormData({
                name: "",
                phone: "",
                text: "",
                check: false,
            })
            console.log("Success", formData);
        } else {
            dispatch({type: "FORM_ERROR"})
        }
        console.log("Failed");
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label
                htmlFor="name"
                className={focusedInput === "name" ? styles.labelFocused : ""}
            >
                Ваше имя
            </label>
            <input
                id="name"
                type="text"
                placeholder="Имя"
                value={formData.name}
                spellCheck="false"
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
                onChange={handleChange}
            />
            <label
                htmlFor="phone"
                className={focusedInput === "phone" ? styles.labelFocused : ""}
            >
                Контакт для связи
            </label>
            <PhoneField
                id="phone"
                focusedInput={focusedInput}
                setFocusedInput={setFocusedInput}
                value={formData.phone}
                onChange={handleChange}
            />
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
                value={formData.text}
                onFocus={() => setFocusedInput("text")}
                onBlur={() => setFocusedInput(null)}
                onChange={handleChange}
            >
            </textarea>
            <label className={styles.checkbox} htmlFor="check">
                <input
                    id="check"
                    type="checkbox"
                    checked={formData.check}
                    onChange={handleChange}
                />
                Даю согласие на обработку персональных данных
            </label>
            <Button onClick={() => dispatch({ type: "OPEN_POPUP" })} type="submit">Обсудить идею</Button>
        </form>
    );
}