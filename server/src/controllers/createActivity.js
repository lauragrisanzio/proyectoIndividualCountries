const { Activity, Country } = require("../db");

const createActivity = async ({ name, duration, difficulty, season, CountryId }) => {
  console.log({ name, duration, difficulty, season, CountryId });
  //validaciones: 1° si existe la actividad, 2° si el pais que pasaron existe
  const activityExists = await Activity.findOne({ where: { name } });
  if (activityExists) throw Error("This activity alredy exists");
  if (!CountryId) throw Error("Must complete field: countries");
    
  // const countries = await Country.findAll({
  //   where: { id: CountryId },
  // });
  //EL COUNTRY VA POR ID
  const newActivity = await Activity.create({ name, duration, difficulty, season});
  
   
 await newActivity.addCountry(CountryId);
return newActivity;
  
};

module.exports = createActivity;