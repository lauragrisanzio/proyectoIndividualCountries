const { Country, Activity } = require("../db");
const {Op} = require("sequelize")

const getCountryById = async (id) => {
    if (!id) throw Error("Complete all fields");
    
    const country = await Country.findByPk(id, {
        include: {
            model: Activity,
            attributes: ["name"]
        }
    })

    if (!country) throw Error("This country doesn't exists in our universe");
    
  return country;
};
// const getCountryById = async (id) => {
//   const countryById = await Country.findOne({
//     attributes: [
//       "name",
//       "flag",
//       "continent",
//       "id",
//       "capital",
//       "subregion",
//       "area",
//       "population",
//     ],
//     where: { id: { [Op.iLike]: `%${id}` } },
//   });
//   return countryById;
// };

module.exports = getCountryById;
