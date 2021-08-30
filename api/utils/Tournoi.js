const db = require("../database");

const GetAllTournois = async (res) => {
    return await new Promise((resolve, reject) => {
        const sqlQuery = `SELECT *
                    FROM t_tournoi 
                    ORDER BY t_id DESC`;
        db.query(sqlQuery, (error, results, fields) => {
            if (error) return reject(error);
            return resolve(results);
        });
    })
        .then(result => res.status(200).json({ result })).catch(error => {
            res.status(400).json({
                message: "couldn't find any tournoi",
                error,
                success: false,
            });
        })
};

const AddTournoi = async (req, res) => {
    const { label } = req.body;
    try {
        stmt = "INSERT INTO t_tournoi(t_label) VALUES(?);";
        values = [label];
        db.query(stmt, values, (stmt_err, stmt_results, stmt_fields) => {
            if (stmt_err) {
                return console.error(`${stmt_err.message} | Query: ${stmt}`);
            } else res.status(200).json({ stmt_results });
        });
    } catch (error) {
        res.status(400).json({
            message: "Couldn't insert trounoi",
            error,
            success: false,
        });
    }
};

const UpdateTournoi = async (req, res) => {
    const { label, desc } = req.body;
    const id = req.params.id;
    try {
        stmt =
            "UPDATE t_tournoi SET t_label=? WHERE t_id = ?";
        values = [label, id];

        db.query(stmt, values, (err, results, fields) => {
            if (err) {
                return console.error(`${err.message} | Query: ${stmt}`);
            } else
                res.status(200).json({
                    message: "Tournoi has been updated.",
                    results,
                    success: true,
                });
        });
    } catch (error) {
        res.status(500).json({
            message: "Couldn't update tournoi - You have an error in your sql syntax.",
            error,
            success: false,
        });
    }
};

const deleteTournoi = async (res) => {
    try {
        stmt = "DELETE FROM t_tournoi WHERE t_id = ?;";

        db.query(stmt, [req.params.id], (err, results, fields) => {
            if (err) {
                return console.error(`${err.message} | Query: ${stmt}`);
            } else
                res.status(200).json({
                    message: "tournoi has been permanently deleted.",
                    results,
                    success: true,
                });
        });
    } catch (error) {
        res.status(500).json({
            message: "Couldn't delete tournoi - You have an error in your sql syntax.",
            error,
            success: false,
        });
    }
};

module.exports = {
    GetAllTournois,
    AddTournoi,
    UpdateTournoi,
    deleteTournoi,
};