import { signUpSchema } from "../models/signUpSchema.js";
import { connectionDB } from "../database/db.js";
import bcrypt from 'bcrypt';

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
        if (sameEmail.rowCount !== 0) {
            return res.sendStatus(409);
        }

    } catch (err) {
        console.log(err)
        res.status(500).send(err.message);
    }
    next();
}

export async function signInValidation(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await connectionDB.query(
            `SELECT * FROM users WHERE email=$1;`,
            [email]
        );
        if (user.rows.length === 0) {
            return res.sendStatus(401);
        }
        const passwordValidation = bcrypt.compareSync(password, user.rows[0].password);
        if (!passwordValidation) {
            return res.sendStatus(401);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }

    next();
}

async function authValidation(req, res, next) {

}