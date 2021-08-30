const router = require("express").Router();

const {
    GetAllJoueur,
    AddJoueur,
    UpdateJoueur,
    deleteJoueur,
    GetAllJoueurNotAssigned,
    AssignJoueurToEquipe,
} = require("../../utils/Joueur");

router.get("/", async (req, res) => {
    return await GetAllJoueur(res);
});

router.get("/not-assigned", async (req, res) => {
    return await GetAllJoueurNotAssigned(res);
});

router.post("/assign", async (req, res) => {
    return await AssignJoueurToEquipe(req, res);
});

router.post("/", async (req, res) => {
    return await AddJoueur(req, res);
});

router.put("/:id", async (req, res) => {
    return await UpdateJoueur(req, res);
});

router.delete("/:id", async (req, res) => {
    return await deleteJoueur(req, res);
});

module.exports = router;