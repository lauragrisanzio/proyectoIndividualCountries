const { Country, Activity } = require("../db");


const getCountryById = async (idPais) => {
    if (!idPais) throw Error("Complete all fields");
    
    const country = await Country.findByPk(idPais.toUpperCase(), {
        include: {
            model: Activity,
            attributes: ["name", "season", "duration", "difficulty"]
        }
    })

    if (!country) throw Error("This country doesn't exists in our universe");
    
  return country;
};

module.exports = getCountryById;
