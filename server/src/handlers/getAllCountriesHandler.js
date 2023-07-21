const getAllCountries = require("../controllers/getAllCountries");


const getAllCountriesHandler = async (req, res) => {
    const {name} = req.query
    try {
        const country = name
            ? await getCountryByName(name)
            : await getAllCountries()
        return res.status(201).json(country)
    } catch (error) {
        return res.status(201).json({error:error.message});
    }
    
};

module.exports = getAllCountriesHandler;