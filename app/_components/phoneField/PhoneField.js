"use client"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"

export default function PhoneField() {
    return (
        <div style={{width: "100%"}}>
            <PhoneInput
                country={"by"}
                // value={phone}
                // onChange={setPhone}
                inputProps={{
                    id: "phone",
                    required: true,
                }}
                inputStyle={{
                    width: "100%",
                    height: "50px",
                    fontFamily: "Nunito Sans, sans-serif",
                    fontWeight: "400",
                    fontSize: "16px",
                    backgroundColor: "black",
                    color: "#ffffff",
                    border: "2px solid #ffffff",
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