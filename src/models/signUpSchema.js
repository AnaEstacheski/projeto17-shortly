import Joi from "joi";

export const signUpSchema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required().min(3),
    password: Joi.string().required().min(3),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
});
