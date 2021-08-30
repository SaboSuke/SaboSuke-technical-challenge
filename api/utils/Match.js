const db = require("../database");

const GetAllMatch = async (res) => {
    return await new Promise((resolve, reject) => {
        const sqlQuery = `SELECT m.*, e.e_label
                        FROM t_match m JOIN t_equipe e
                            ON m.e1_id = e.e_id
                        ORDER BY m_id DESC;

                        SELECT m.*, e.e_label
                        FROM t_match m JOIN t_equipe e
                            ON m.e2_id = e.e_id
                        ORDER BY m_id DESC;`;
        db.query(sqlQuery, (error, results, fields) => {
            if (error) return reject(error);
            return resolve(results);
        });
    }).then(result => res.status(200).json({ result })).catch(error => {
        res.status(400).json({
            message: "couldn't find any match",
            error,
            success: false,
        });
    })
};

const AddMatch = async (req, res) => {
    const { label, equipe1, equipe2 } = req.body;
    try {
        stmt = "INSERT INTO t_match(m_label, e1_id, e2_id) VALUES(?, ?, ?);";
        values = [label, equipe1, equipe2];
        db.query(stmt, values, (stmt_err, stmt_results, stmt_fields) => {
            if (stmt_err) {
                return console.error(`${stmt_err.message} | Query: ${stmt}`);
            } else res.status(200).json({ stmt_results });
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't insert match",
            error,
            success: false,
        });
    }
};

const UpdateMatch = async (req, res) => {
    const { label, equipe1, equipe2 } = req.body;
    const id = req.params.id;
    try {
        stmt =
            "UPDATE t_match SET m_label=?, e1_id=?, e2_id=? WHERE m_id = ?";
        values = [label, equipe1, equipe2, id];

        db.query(stmt, values, (err, results, fields) => {
            if (err) {
                return console.error(`${err.message} | Query: ${stmt}`);
            } else
                res.status(200).json({
                    message: "Match has been updated.",
                    results,
                    success: true,
                });
        });
    } catch (error) {
        res.status(500).json({
            message: "Couldn't update match - You have an error in your sql syntax.",
            error,
            success: false,
        });
    }
};

const deleteMatch = async (res) => {
    try {
        stmt = "DELETE FROM t_match WHERE m_id = ?;";

        db.query(stmt, [req.params.id], (err, results, fields) => {
            if (err) {
                return console.error(`${err.message} | Query: ${stmt}`);
            } else
                res.status(200).json({
                    message: "Match has been permanently deleted.",
                    results,
                    success: true,
                });
        });
    } catch (error) {
        res.status(500).json({
            message: "Couldn't delete match - You have an error in your sql syntax.",
            error,
            success: false,
        });
    }
};

module.exports = {
    GetAllMatch,
    AddMatch,
    UpdateMatch,
    deleteMatch,
};