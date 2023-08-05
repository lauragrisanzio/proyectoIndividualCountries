const { Activity, Country } = require("../db");

const createActivity = async (name, difficulty, duration, season, countriesId) => { 
    
    //validaciones: 1° si existe la actividad, 2° si el pais que pasaron existe
    const activityExists = await Activity.findOne({ where: { name } })
    if (activityExists) throw Error("This activity alredy exists");
    if(!countriesId) throw Error ("Must complete field: countries")
    
    const countries = await Country.findAll({
      where: { id: countriesId },
    });
    //EL COUNTRY VA POR ID
    const newActivity = await Activity.create( {name, difficulty, duration, season, countriesId} );
    console.log({ name, difficulty, duration, season, countriesId });
   
    await newActivity.addCountries(countries);

    return newActivity

};

module.exports = createActivity;