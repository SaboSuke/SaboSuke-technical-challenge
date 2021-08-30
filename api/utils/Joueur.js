const db = require("../database");

const GetAllJoueur = async (res) => {
    return await new Promise((resolve, reject) => {
        const sqlQuery = `SELECT *
                    FROM t_joueur
                    ORDER BY j_id DESC`;
        db.query(sqlQuery, (error, results, fields) => {
            if (error) return reject(error);
            return resolve(results);
        });
    }).then(result => res.status(200).json({ result })).catch(error => {
        res.status(400).json({
            message: "couldn't find any joueur",
            error,
            success: false,
        });
    })
};

const GetAllJoueurNotAssigned = async (res) => {
    return await new Promise((resolve, reject) => {
        const sqlQuery = `SELECT *
                    FROM t_joueur
                    WHERE j_id NOT IN (
                        SELECT j_id
                        FROM t_joueur
                        JOIN t_equipe_joueur USING(j_id)
                    )
                    ORDER BY j_id DESC`;
        db.query(sqlQuery, (error, results, fields) => {
            if (error) return reject(error);
            return resolve(results);
        });
    }).then(result => res.status(200).json({ result })).catch(error => {
        res.status(400).json({
            message: "couldn't find any joueur",
            error,
            success: false,
        });
    })
};

const AssignJoueurToEquipe = async (req, res) => {
    return await new Promise((resolve, reject) => {
        const { equipe_id, joueur_id } = req.body;
        const sqlQuery = `INSERT INTO t_equipe_joueur(e_id, j_id)
                            VALUES(?, ?);`;
        db.query(sqlQuery, [parseInt(equipe_id), parseInt(joueur_id)], (error, results, fields) => {
            if (error) return reject(error);
            return resolve(results);
        });
    }).then(result => res.status(200).json({ result })).catch(error => {
        res.status(400).json({
            message: "couldn't assign joueur to equipe",
            error,
            success: false,
        });
    })
};

const AddJoueur = async (req, res) => {
    const { nome } = req.body;
    try {
        stmt = "INSERT INTO t_joueur(j_nom) VALUES(?);";
        values = [nome];
        db.query(stmt, values, (stmt_err, stmt_results, stmt_fields) => {
            if (stmt_err) {
                return console.error(`${stmt_err.message} | Query: ${stmt}`);
            } else res.status(200).json({ stmt_results });
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't insert joueur",
            error,
            success: false,
        });
    }
};

const UpdateJoueur = async (req, res) => {
    const { nome } = req.body;
    const id = req.params.id;
    try {
        stmt =
            "UPDATE t_joueur SET j_nome=? WHERE j_id = ?";
        values = [nome, id];

        db.query(stmt, values, (err, results, fields) => {
            if (err) {
                return console.error(`${err.message} | Query: ${stmt}`);
            } else
                res.status(200).json({
                    message: "joueur has been updated.",
                    results,
                    success: true,
                });
        });
    } catch (error) {
        res.status(500).json({
            message: "Couldn't update joueur - You have an error in your sql syntax.",
            error,
            success: false,
        });
    }
};

const deleteJoueur = async (res) => {
    try {
        stmt = "DELETE FROM t_joueur WHERE j_id = ?;";

        db.query(stmt, [req.params.id], (err, results, fields) => {
            if (err) {
                return console.error(`${err.message} | Query: ${stmt}`);
            } else
                res.status(200).json({
                    message: "joueur has been permanently deleted.",
                    results,
                    success: true,
                });
        });
    } catch (error) {
        res.status(500).json({
            message: "Couldn't delete joueur - You have an error in your sql syntax.",
            error,
            success: false,
        });
    }
};

module.exports = {
    GetAllJoueur,
    AddJoueur,
    UpdateJoueur,
    deleteJoueur,
    GetAllJoueurNotAssigned,
    AssignJoueurToEquipe,
};