"use client"
import styles from "./form.module.css";
import Button from "@/app/_components/button/Button";
import PhoneField from "@/app/_components/phoneField/PhoneField";
import {useContext, useState} from "react";
import {AppContext} from "@/app/_context/AppContext";


export default function Form({ type }) {
    const [state, dispatch] = useContext(AppContext);
    const [focusedInput, setFocusedInput] = useState(null);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        text: "",
        check: false,
    });

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
        if (!formData.check) newErrors.check = true;

        return newErrors;
    };



    const handleSubmit = async(e) => {
        e.preventDefault();
        const validateErrors = validate();
        setErrors(validateErrors);
        if (Object.keys(validateErrors).length > 0) {
            dispatch({type: "FORM_ERROR"})
            return;
        } 

        try {
            const res = await fetch("api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            if (data.success) {
                dispatch({type: "FORM_SUCCESS"})
                dispatch({ type: "OPEN_POPUP" });
                setFormData({
                    name: "",
                    phone: "",
                    text: "",
                    check: false,
                })
            } else {
                dispatch({ type: "FORM_ERROR" });
            }
        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
        }

    };

    return (
        <form className={`${styles.form} ${styles[type]}`} onSubmit={handleSubmit}>
            <label
                htmlFor="name"
                className={(focusedInput === "name" || formData.name) ? styles.labelFocused : ""}
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
                className={errors.name ? styles.errorInput : ""}
            />
            <label
                htmlFor="phone"
                className={(focusedInput === "phone" || formData.phone) ? styles.labelFocused : ""}
            >
                Контакт для связи
            </label>
            <PhoneField
                id="phone"
                focusedInput={focusedInput}
                setFocusedInput={setFocusedInput}
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
            />
            <label
                htmlFor="text"
                className={(focusedInput === "text" || formData.text) ? styles.labelFocused : ""}
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
                className={errors.text ? styles.errorInput : ""}
            >
            </textarea>
            <label className={`${styles.checkbox} ${errors.check ? styles.checkboxError : ""}`} htmlFor="check">
                <input
                    id="check"
                    type="checkbox"
                    checked={formData.check}
                    onChange={handleChange}
                />
                Даю согласие на обработку персональных данных
            </label>
            <Button type="submit">
                Обсудить идею
            </Button>
        </form>
    );
}