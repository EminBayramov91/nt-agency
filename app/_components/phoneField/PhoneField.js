"use client"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"

export default function PhoneField({ focusedInput, setFocusedInput }) {
    const fontSize = focusedInput === "phone" ? "19px" : "16px";
    const border = focusedInput === "phone" ? "2px solid #0066FF" : "2px solid #ffffff";

    return (
        <div style={{width: "100%"}}>
            <PhoneInput
                country={"by"}
                // value={phone}
                onFocus={() => setFocusedInput("phone")}
                onBlur={() => setFocusedInput(null)}
                inputProps={{
                    id: "phone",
                    required: true,
                }}
                inputStyle={{
                    width: "100%",
                    height: "50px",
                    fontFamily: "Nunito Sans, sans-serif",
                    fontWeight: "600",
                    fontSize: fontSize,
                    backgroundColor: "black",
                    color: "#ffffff",
                    border: border,
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