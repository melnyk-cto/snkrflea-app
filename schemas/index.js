import { object, string, bool, number } from 'yup';

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

export const storeSchema = object({
    name: string().required(),
    contactEmail: string().required().email(),
    address: string(),
    twitter: string(),
    tiktok: string(),
    instagram: string(),
});

export const productSchema = object({
    title: string().required(),
    description: string().required(),
    price: number().required()
});

export const checkoutSchema = object({
    name: string().required(),
    address: string().required(),
    city: string().required(),
    state: string().required(),
    zip: number().required()
});