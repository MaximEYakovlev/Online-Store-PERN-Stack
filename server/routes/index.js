const Router = require("express");
const router = new Router();
const brandRouter = require("./brandRouter");
const deviceRouter = require("./deviceRouter");
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");

router.use("/brand", brandRouter);
router.use("/device", deviceRouter);
router.use("/type", typeRouter);
router.use("/user", userRouter);

module.exports = router;
