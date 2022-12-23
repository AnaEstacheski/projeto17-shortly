import { connectionDB } from "../database/db.js";
import * as repository from "../repositories/repository.js";

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
       return next();
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

export async function validateUrlDelete(req, res, next) {
    const urlId = req.params.id
    const { userId } = res.locals;

    try {
        const shortUrlExist = (await repository.urlById(urlId)).rows[0];
        if (!shortUrlExist) {
            return res.sendStatus(404);
        }
        const urlUser = (await repository.urlByUser(urlId, userId)).rows[0];
        if (!urlUser) {
            return res.sendStatus(401);
        }
        return next();
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}