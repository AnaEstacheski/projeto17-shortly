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

