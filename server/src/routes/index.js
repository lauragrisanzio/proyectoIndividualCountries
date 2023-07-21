const { Router } = require("express");

const countryRouter = require("./country.Routes");
const activityRouter = require("./activity.Routes");

const indexRoute = Router();

indexRoute.use("/countries", countryRouter);
indexRoute.use("/activities", activityRouter);

module.exports = indexRoute;
