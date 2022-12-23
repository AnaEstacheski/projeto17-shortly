import { connectionDB } from "../database/db.js";

export async function updateVisit(shortId) {
    const visit = await getVisits(shortId);
    if (visit.rowCount > 0) {
        return incrementVisit(shortId);
    }
    return insertVisit(shortId);
}

export async function getVisits(shortId) {
    return connectionDB.query(
        `SELECT * FROM visits WHERE "shortid"=$1;`,
        [shortId]
    );
}

export async function insertVisit(shortId) {
    return connectionDB.query(
        `INSERT INTO visits ("shortid", visit) VALUES ($1, $2);`,
        [shortId, 1]
    );
}

export async function incrementVisit(shortId) {
    return connectionDB.query(
        `UPDATE visits SET visit = visit + 1 WHERE "shortid"=$1;`,
        [shortId]
    );
}

export async function getShortenedUrl(shortUrl) {
    const url = await connectionDB.query(
        `SELECT * FROM shortened WHERE "shorturl"=$1;`,
        [shortUrl]
    );
    if (url.rowCount > 0) {
        const shortId = url.rows[0].id;
        updateVisit(shortId);
    }
    return url;
}

export async function urlById(urlId) {
    return connectionDB.query(
        `SELECT id FROM shortened WHERE id=$1;`,
        [urlId]
    );
}

export async function urlByUser(urlId, userId) {
    return connectionDB.query(
        `SELECT id FROM shortened WHERE id=$1 AND "userId"=$2;`,
        [urlId, userId]
    );
}

export async function deleteUrl(urlId) {
    return connectionDB.query(
        `DELETE FROM shortened WHERE id=$1`,
        [urlId]
    );
}

export async function userInfo(id) {
    return connectionDB.query(
    `SELECT * FROM users WHERE id=$1;`,
    [id]
   );
}

export async function getUserUrl(id) {
    return connectionDB.query(
    `SELECT url, "shorturl", shortened.id, SUM( CASE WHEN visit IS NULL THEN 0 ELSE visit END) AS "visitCount" FROM shortened
    LEFT JOIN visits ON visits."shortid"=shortened.id WHERE "userId"=$1
    GROUP BY shortened.id;`,
    [id]
   );
}
