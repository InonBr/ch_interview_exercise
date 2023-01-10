import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import "../styles/form.css";
import PhoneInputField from "./PhoneInput";
import { createNewMsg } from "../../lib/api";

const NewMsgForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [invalidPhoneNumber, setInvalidPhoneNumber] = useState(false);

  const handlePhoneInput = (number: string) => {
    setPhoneNumber(number);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const { message } = data as { message: string };

    setInvalidPhoneNumber(false);

    if (!phoneRegex.test(phoneNumber)) {
      setInvalidPhoneNumber(true);
      return;
    }

    const newMessageResponse = await createNewMsg({ phoneNumber, message });
  };

  return (
    <Form className="m-5" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
        <PhoneInputField handleFunc={handlePhoneInput} />

        {invalidPhoneNumber && (
          <Form.Text className="red-text" role="alert">
            Invalid phone number
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label htmlFor="message">Text Message</Form.Label>
        <Form.Control
          id="message"
          type="text"
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", { required: true, maxLength: 250 })}
        />

        {errors.message && errors.message.type === "required" && (
          <Form.Text className="red-text" role="alert">
            Message is required
          </Form.Text>
        )}

        {errors.message && errors.message.type === "maxLength" && (
          <Form.Text className="red-text" role="alert">
            Message is too long
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
