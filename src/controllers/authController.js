import { connectionDB } from "../database/db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function signUp(req, res) {
    const { name, email, password } = req.body
    const encryptedPass = bcrypt.hashSync(password, 10);
    try {
        await connectionDB.query(
            `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
            [name, email, encryptedPass]
        );
        return res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {
    const { email } = req.body;

    try {
        const user = await connectionDB.query(
            `SELECT * FROM users WHERE email=$1;`,
            [email]
        );
        const token = jwt.sign({
            user: user.rows[0].id
        }, process.env.TOKEN_SECRET);

        await connectionDB.query(
            `INSERT INTO sessions (token, "userId") 
            VALUES ($1, $2);`,
            [token, user.rows[0].id]
        );
        return res.status(200).send({ token })
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}