const { Router } = require("express");
const userController = require("../controller/padraoController");
const router = Router();

router.get("/", userController.get);
router.get("/:id", userController.getid);

router.post("/", userController.post);
router.put("/:id", userController.put);
router.delete("/:id", userController.delete);

module.exports = router;
