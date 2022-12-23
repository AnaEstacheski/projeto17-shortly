import { connectionDB } from "../database/db.js";
import { nanoid } from "nanoid";
import * as repository from "../repositories/repository.js";

export async function sendShortenedUrl(req, res) {
    const { url } = req.body;
    const userId = res.locals.userId;
    const shortUrl = nanoid();

    if (!url) {
        return res.sendStatus(401);
    }

    try {
        await connectionDB.query(
            `INSERT INTO shortened (url, "shorturl", "userId") 
            VALUES ($1, $2, $3);`,
            [url, shortUrl, userId]
        );
        return res.status(201).send(shortUrl);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}

export async function getUrl(req, res) {
    const { id } = req.params;
    try {
        const url = await connectionDB.query(
            `SELECT id, "shorturl", url FROM shortened
            WHERE id=$1;`,
            [id]
        );
        return res.status(200).send(url.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}

export async function redirectUser(req, res) {
    const { shortUrl } = req.params;
    try {
        const url = await repository.getShortenedUrl(shortUrl);
        return res.redirect(url.rows[0].url);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
    return res.sendStatus(200);
}

export async function deleteUrl(req, res) {
    const { id } = req.params;

    try {
        await repository.deleteUrl(id);
        return res.sendStatus(204);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}

