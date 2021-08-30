const router = require("express").Router();

const {
    GetAllTournois,
    AddTournoi,
    UpdateTournoi,
    deleteTournoi,
} = require("../../utils/Tournoi");

router.get("/", async (req, res) => {
    return await GetAllTournois(res);
});

router.post("/", async (req, res) => {
    return await AddTournoi(req, res);
});

router.put("/:id", async (req, res) => {
    return await UpdateTournoi(req, res);
});

router.delete("/:id", async (req, res) => {
    return await deleteTournoi(req, res);
});

module.exports = router;