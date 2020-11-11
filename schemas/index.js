import { object, string, number, bool } from 'yup';

export const loginSchema = object({
    email: string()
        .required()
        .email(),
    password: string().required().min(4, 'Must be exactly 4 digits'),
});

export const registerSchema = object({
    email: string()
        .required()
        .email(),
    password: string().required().min(4, 'Must be exactly 4 digits'),
    privacy: bool().oneOf([true]).required()
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