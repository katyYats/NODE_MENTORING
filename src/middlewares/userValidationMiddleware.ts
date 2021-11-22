import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const UserDataSchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string()
        .pattern(new RegExp(/^[0-9]*[a-zA-Z]+[a-zA-Z0-9]*$/))
        .required(),
    age: Joi.number().integer().min(4).max(130).required()
});

export const userValidator = (req: Request, res: Response, next: NextFunction) => {
    const { error } = UserDataSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ status: 400, message: 'Validation Error' });
    }

    next();
};
