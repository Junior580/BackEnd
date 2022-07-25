const { Router } = require("express");
const userController = require("../controller/padraoController");
const router = Router();

router.get("/", userController.get);
router.post("/", userController.post);

module.exports = router;
