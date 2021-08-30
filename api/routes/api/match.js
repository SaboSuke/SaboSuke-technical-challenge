const router = require("express").Router();

const {
    GetAllMatch,
    AddMatch,
    UpdateMatch,
    deleteMatch,
} = require("../../utils/Match");

router.get("/", async (req, res) => {
    return await GetAllMatch(res);
});

router.post("/", async (req, res) => {
    return await AddMatch(req, res);
});

router.put("/:id", async (req, res) => {
    return await UpdateMatch(req, res);
});

router.delete("/:id", async (req, res) => {
    return await deleteMatch(req, res);
});

module.exports = router;