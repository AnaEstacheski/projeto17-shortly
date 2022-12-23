import { connectionDB } from "../database/db.js";
import { nanoid } from "nanoid";

export async function sendShortenedUrl(req, res) {
    const { url } = req.body;
    const userId = res.locals.userId;
    const shortUrl = nanoid();

    if (!url) {
        return res.sendStatus(401);
    }

    try {
        await connectionDB.query(
            `INSERT INTO shortened (url, "shortUrl", "userId") 
            VALUES ($1, $2, $3);`,
            [url, shortUrl, userId]
        );
        return res.status(201).send(shortUrl);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}
