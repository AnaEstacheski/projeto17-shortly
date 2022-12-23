import { connectionDB } from "../database/db.js";

export async function validateUrl(req, res, next) {
    const { id } = req.params;

    try {
        const url = await connectionDB.query(
            `SELECT * FROM shortened WHERE id=$1`,
            [id]
        )
        if (url.rowCount === 0) {
            return res.sendStatus(404);
        }
        next();
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}

export async function validateShortUrl(req, res, next) {
    const { shortUrl } = req.params;

    try {
        const shortUrlExist = await connectionDB.query(
            `SELECT * FROM shortened WHERE "shorturl"=$1;`,
            [shortUrl]
        );
        if (shortUrlExist.rowCount === 0) {
            return res.sendStatus(404);
        }
        return next();
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}
