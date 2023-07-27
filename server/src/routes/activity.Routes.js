const {Router} = require("express");

const createActivityHandler = require("../handlers/createActivityHandler")

const activityRouter = Router();

activityRouter.get("/", (req, res) => {
    res.send("ruta para get activities")
});

activityRouter.post("/", createActivityHandler);

module.exports = activityRouter;