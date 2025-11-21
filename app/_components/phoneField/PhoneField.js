"use client"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"

export default function PhoneField({ id, focusedInput, setFocusedInput, value, onChange, error }) {
    const fontSize = focusedInput === "phone" ? "19px" : "16px";
    const border = () => {
        if (focusedInput === "phone") {
            return "2px solid #0066FF"
        }
        if (error) {
            return "2px solid red"
        } else {
            return "2px solid #ffffff"
        }
    }

    return (
        <div style={{width: "100%"}}>
            <PhoneInput
                country={"by"}
                value={value}
                onFocus={() => setFocusedInput("phone")}
                onBlur={() => setFocusedInput(null)}
                onChange={(val) => onChange({ target: { id: id, value: val, type: "phone" } })}
                inputProps={{
                    id: id,
                    required: true,
                }}
                inputClass="phone-input"
                inputStyle={{
                    width: "100%",
                    height: "50px",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: "600",
                    fontSize: fontSize,
                    backgroundColor: "black",
                    color: "#ffffff",
                    border: border(),
                    borderRadius: "20px",
                    padding: "12px 16px 12px 55px",
                    marginBottom: "24px"
                }}
                buttonStyle={{
                    backgroundColor: "transparent",
                    border: "none",
                    paddingLeft: "16px",
                }}
            />
        </div>
    )
}