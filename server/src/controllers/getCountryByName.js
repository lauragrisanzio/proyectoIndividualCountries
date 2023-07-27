const { Country, Activity } = require("../db");
const {Op} = require("sequelize")

const getCountryByName = async (name) => {
  
    const countries = await Country.findAll({
        //findAll devuelve un array - findOne un objeto - necesitamos todos los paises que coincidan
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
        },
    });
    if (!countries) throw Error("No countries were found in the search");
    return countries;
    
};

module.exports = getCountryByName;