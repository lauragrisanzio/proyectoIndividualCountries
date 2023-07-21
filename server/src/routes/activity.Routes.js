const {Router} = require("express");


const activityRouter = Router();

activityRouter.get("/", (req, res) => {
    res.send("ruta para get activities")
});

activityRouter.post("/", (req, res) => {
  res.send("ruta para POST activities");
});

module.exports = activityRouter;