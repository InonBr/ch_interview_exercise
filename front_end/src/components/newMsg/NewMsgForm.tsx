import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../styles/form.css";
import PhoneInputField from "./PhoneInput";

const NewMsgForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneInput = (number: string) => {
    setPhoneNumber(number);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: {}) => {
    console.log(data);
    console.log(phoneNumber);
    console.log("dsadsadsadas");
  };

  return (
    <Form className="m-5" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
        <PhoneInputField handleFunc={handlePhoneInput} />
      </Form.Group>

      <Form.Group className="mt-5">
        <Form.Label htmlFor="message">Text Message</Form.Label>
        <Form.Control
          id="message"
          type="text"
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", { required: true })}
        />

        {errors.message && errors.message.type === "required" && (
          <Form.Text className="red-text" role="alert">
            Message is required
          </Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit message
      </Button>
    </Form>
  );
};

export default NewMsgForm;
