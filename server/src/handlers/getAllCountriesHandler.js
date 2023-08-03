const getAllCountries = require("../controllers/getAllCountries");
const getCountryByName = require("../controllers/getCountryByName");


const getAllCountriesHandler = async (req, res) => {
    const {name} = req.query
    try {
        const country = name
            ? await getCountryByName(name)
            : await getAllCountries()
        return res.status(201).json(country)
    } catch (error) {
        return res.status(400).send("No se encontro el pais solicitado");
    }
    
};

module.exports = getAllCountriesHandler;