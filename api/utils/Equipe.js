const db = require("../database");

const GetAllEquipe = async (res) => {
    return await new Promise((resolve, reject) => {
        const sqlQuery = `SELECT *
                    FROM t_equipe
                    ORDER BY e_id DESC`;
        db.query(sqlQuery, (error, results, fields) => {
            if (error) return reject(error);
            return resolve(results);
        });
    }).then(result => res.status(200).json({ result })).catch(error => {
        res.status(400).json({
            message: "couldn't find any equipe",
            error,
            success: false,
        });
    });
};

const GetAllEquipe_notInMatch = async (res) => {
    return await new Promise((resolve, reject) => {
        const sqlQuery = `SELECT *
                        FROM t_equipe
                        WHERE e_id NOT IN (
                            SELECT e1_id
                            FROM t_match
                        ) AND e_id NOT IN (
                            SELECT e2_id
                            FROM t_match
                        )`;
        db.query(sqlQuery, (error, results, fields) => {
            if (error) return reject(error);
            return resolve(results);
        });
    }).then(result => res.status(200).json({ result })).catch(error => {
        res.status(400).json({
            message: "couldn't find any equipe without a match",
            error,
            success: false,
        });
    });
};

const AddEquipe = async (req, res) => {
    const { label, entraineur } = req.body;
    const { e_id, j_id } = req.params;
    try {
        let stmt = `
            INSERT INTO t_equipe(e_label, e_entraineur) VALUES(?, ?);
            INSERT INTO t_equipe_joueur(e_id, j_id) VALUES(?, ?);
        `;
        let values = [label, entraineur, e_id, j_id];

        db.query(stmt, values, (stmt_err, stmt_results, stmt_fields) => {
            if (stmt_err) {
                return console.error(`${stmt_err.message} | Query: ${stmt}`);
            } else res.status(200).json({ stmt_results });
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't insert equipe",
            error,
            success: false,
        });
    }
};

const UpdateEquipe = async (req, res) => {
    const { label, entraineur } = req.body;
    const id = req.params.id;
    try {
        let stmt = `
            UPDATE t_equipe SET e_label=?, e_entraineur=? WHERE e_id = ?;`;
        let values = [label, entraineur, id];

        db.query(stmt, values, (err, results, fields) => {
            if (err) {
                return console.error(`${err.message} | Query: ${stmt}`);
            } else
                res.status(200).json({
                    message: "Equipe has been updated.",
                    results,
                    success: true,
                });
        });
    } catch (error) {
        res.status(500).json({
            message: "Couldn't update equipe - You have an error in your sql syntax.",
            error,
            success: false,
        });
    }
};

const UpdateEquipeJoueur = async (req, res) => {
    const { j_id, e_id, ej_id } = req.params;
    try {
        let stmt = `
            UPDATE t_equipe_joueur SET j_id=?, e_id=? WHERE ej_id = ?;`;
        let values = [j_id, e_id, ej_id];

        db.query(stmt, values, (err, results, fields) => {
            if (err) {
                return console.error(`${err.message} | Query: ${stmt}`);
            } else
                res.status(200).json({
                    message: "Equipe joueur has been updated.",
                    results,
                    success: true,
                });
        });
    } catch (error) {
        res.status(500).json({
            message: "Couldn't update equipe joueur - You have an error in your sql syntax.",
            error,
            success: false,
        });
    }
};

const deleteEquipe = async (res) => {
    try {
        stmt = "DELETE FROM t_equipe WHERE e_id = ?;";

        db.query(stmt, [req.params.id], (err, results, fields) => {
            if (err) {
                return console.error(`${err.message} | Query: ${stmt}`);
            } else
                res.status(200).json({
                    message: "Equipe has been permanently deleted.",
                    results,
                    success: true,
                });
        });
    } catch (error) {
        res.status(500).json({
            message: "Couldn't delete equipe - You have an error in your sql syntax.",
            error,
            success: false,
        });
    }
};

module.exports = {
    GetAllEquipe,
    AddEquipe,
    UpdateEquipe,
    UpdateEquipeJoueur,
    deleteEquipe,
    GetAllEquipe_notInMatch,
};