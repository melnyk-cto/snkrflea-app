import { object, string, bool } from 'yup';

export const loginSchema = object({
    email: string()
      .required()
      .email(),
    password: string().required().min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits')
  });

  export const registerSchema = object({
    email: string()
      .required()
      .email(),
    password: string().required().min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits'),
    privacy: bool().oneOf([true], 'Field must be checked').required()
  });

export const contactSchema = object({
    name: string().required(),
    email: string().required().email(),
    help: string().required()
});
export const reportSchema = object({
    reason: string().required(),
    comments: string().required()
});