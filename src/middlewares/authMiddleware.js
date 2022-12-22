import { signUpSchema } from "../models/signUpSchema.js";
import { connectionDB } from "../database/db.js";

export async function signUpSchemaValidation(req, res, next) {
    const { name, email, password, confirmPassword } = req.body;

    const { error } = signUpSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).send(error.details.map(detail => detail.message))
    }
    if (password !== confirmPassword) {
        return res.sendStatus(422);
    }

    try {
        const sameEmail = await connectionDB.query(
            `SELECT * FROM users WHERE email=$1;`,
            [email]
        );
        if(sameEmail.rowCount !== 0){
            return res.sendStatus(409);
        }

    } catch (err) {
        console.log(err)
        res.status(500).send(err.message);
    }
    next();
}

async function signInValidation(req, res, next) {

}

async function authValidation(req, res, next) {

}