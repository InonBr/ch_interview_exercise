import * as yup from "yup";

export const messageBodySchema = yup
  .object({
    phoneNumber: yup.string().required().trim(),
    message: yup
      .string()
      .required()
      .trim()
      .max(250, "message must be 250 characters or less"),
  })
  .required();
