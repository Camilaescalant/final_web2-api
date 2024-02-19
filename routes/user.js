const { body, validationResult } = require("express-validator");
const user = require("../controllers/user");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/info/:idUser", async function (req, res) {
    const data = await user.getUserById(req.params.idUser)
    return res.send(data)
});

router.put('/info/:idUser', async function (req, res){
    const data= await user.updateChanges(req.params.idUser, req.body)
})

module.exports = router;