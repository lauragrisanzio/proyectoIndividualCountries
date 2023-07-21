const { Router } = require("express");
const getAllCountriesHandler = require("../handlers/getAllCountriesHandler");

const countryRouter = Router();

// countryRouter.get("/", (req, res) => {
//     res.send("ruta para get countries")
// });

countryRouter.get("/", getAllCountriesHandler)

//esta va a ser 1 sola ruta con get de todos los paises, 
//si existe un query va por query si no todos los paises;
countryRouter.get("/nombre", (req, res) => {
  res.send("ruta para get pais por NOMBRE");
});

countryRouter.get("/:idPais", (req, res) => {
  res.send("ruta para get pais por id");
});
// countryRouter.get("/", getAllCountries)
module.exports = countryRouter;
