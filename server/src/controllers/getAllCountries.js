const axios = require("axios");
const { Country, Activity } = require("../db");

const getAllCountries = async () => {
  const database = await Country.findAll();
  if (database.length > 0) return database;
  try {
    const { data } = await axios.get("http://localhost:5000/countries");

    if (!data) throw new Error("Not found");

    const countries = data.map((country) => {
      Country.findOrCreate({
        where: {
          id: country.cca3,
          name: country.name.common,
          flag: country.flags.png
            ? country.flags.png
            : "Country'flag not found",
          continent: country.continents[0],
          capital: country.capital
            ? country.capital[0]
            : "Country'capital not found",
          subregion: country.subregion || null,
          area: country.area,
          population: country.population,
          // ? country.population : "Invite you looking for this information"
        }
      });
    });
     
    countries = await Country.findAll({
      include: [{
        model: Activity
      }]
        // attributes: ["name", "difficulty", "duration", "season"],
        // through: {
        //   attributes: [], //de la tabla intermedia no quiero nada
        // }}, 
     })
    console.log(Country);
   return countries= countries.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png ? country.flags.png : "Country'flag not found",
        continent: country.continents[0],
        capital: country.capital
          ? country.capital[0]
          : "Country'capital not found",
        subregion: country.subregion || null,
        area: country.area,
        population: country.population,
        activity: country.Activities?.map((el) => el.name),
      };
    });
    
    
    
  } catch (error) {
    alert("No countries")
  }
};

module.exports = getAllCountries;
