import { object, string, bool } from 'yup';

export const loginSchema = object({
    email: string().required().email(),
    password: string().required(),
});

export const registerSchema = object({
    email: string().required().email(),
    password: string().required(),
    privacy: bool().oneOf([true], 'Field must be checked').required()
});

export const contactSchema = object({
    name: string().required(),
    email: string().required().email(),
    help: string().required()
});
