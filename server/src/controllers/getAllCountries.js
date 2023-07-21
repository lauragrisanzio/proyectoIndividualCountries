const axios = require("axios");
const { Country } = require("../db");

// const URL = "http://localhost:5000/countries";

// const getAllCountries = async (req, res) => {

//   let databaseComplete = await Country.findAll(); //corroboro q' haya algo en la DB
//   if (databaseComplete.length > 0) return res.status(200).json(databaseComplete); // si tiene algo lo retorno

//   try {

//     const api = await axios.get("http://localhost:5000/countries").data; //await c/vez que solicitamos info a DB o API - SOLICITO INFO
//     const allCountries = api.map((country) => { //mapeo la info y devuelvo un nuevo array con la info
//       // if (typeof country.flags[0] === "undefined") country.flags[0] = "Flag not found"
//       return {
//         id: country.cca3,
//         name: country.name.official,
//         flag: country.flags[0]
//           ? country.flags[0]
//           : "Country'flag not found",
//         continent: country.continents[0],
//         capital: country.capital[0]
//           ? country.capital
//           : "Country'capital not found",
//         subregion: country.subregion || null,
//         area: country.area || null,
//         population: country.population ? country.population : "Invite you looking for this information",
//       };
//     })

//     allCountries.forEach(e => {
//        Country.create({
//          id: e.id,
//          name: e.name,
//          flag: e.glag,
//          continent: e.continents,
//          capital: e.capital,
//          subregion: e.subregion,
//          area: e.area,
//          population: e.population,
//        });
//     });
//   return res.status(200).json(allCountries)

//   } catch (error) {
//       res.status(400).send("Error al cargar los datos");
//     }
//   };

const getAllCountries = async () => {
  const database = await Country.findAll();
  if (database.length > 0) return database;
  try {
    const { data } = await axios.get("http://localhost:5000/countries");

    if (!data) throw new Error("Not found");

     data.map(
      (country) => Country.findOrCreate({
          where: {
            id: country.cca3,
            name: country.name.official,
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
        })
    ); 
  } catch (error) {
    return error
  }
};

module.exports = getAllCountries;
