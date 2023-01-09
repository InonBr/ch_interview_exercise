import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "../styles/form.css";

const PhoneInputField = (props: { handleFunc: (number: string) => void }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (number: string) => {
    setPhoneNumber(number);
    props.handleFunc(number);
  };

  return (
    <PhoneInput
      defaultCountry="IL"
      placeholder="Enter phone number"
      value={phoneNumber}
      onChange={(number) => {
        if (number) handleChange(number);
      }}
      className="number-input"
    />
  );
};

export default PhoneInputField;
