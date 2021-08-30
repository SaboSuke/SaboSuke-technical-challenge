const router = require("express").Router();

const {
    GetAllEquipe,
    AddEquipe,
    UpdateEquipe,
    UpdateEquipeJoueur,
    deleteEquipe,
    GetAllEquipe_notInMatch,
} = require("../../utils/Equipe");

router.get("/", async (req, res) => {
    return await GetAllEquipe(res);
});

router.get("/not-in-match", async (req, res) => {
    return await GetAllEquipe_notInMatch(res);
});

router.post("/", async (req, res) => {
    return await AddEquipe(req, res);
});

router.put("/:id", async (req, res) => {
    return await UpdateEquipe(req, res);
});

router.put("/jeuour/:id", async (req, res) => {
    return await UpdateEquipeJoueur(req, res);
});

router.delete("/:id", async (req, res) => {
    return await deleteEquipe(req, res);
});

module.exports = router;