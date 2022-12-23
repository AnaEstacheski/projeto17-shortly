import { connectionDB } from "../database/db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function signUpValidation(req, res, next) {
    const { name, email, password, confirmPassword } = req.body;
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

export async function authValidation(req, res, next) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(decoded, "testando");
        res.locals.userId = decoded.user;
        return next();
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}