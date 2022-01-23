const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/auth", userController.auth);

module.exports = router;
