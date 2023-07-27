const {Router} = require("express");

const getAllActivitiesHandler = require("../handlers/getAllActivitiesHandler")
const createActivityHandler = require("../handlers/createActivityHandler")

const activityRouter = Router();

activityRouter.get("/", getAllActivitiesHandler);

activityRouter.post("/", createActivityHandler);

module.exports = activityRouter;