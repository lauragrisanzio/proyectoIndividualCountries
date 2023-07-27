const { Activity, Country } = require("../db");

const createActivity = async (name, difficulty, duration, season, countries) => { 
    
    //validaciones: 1° si existe la actividad, 2° si el pais que pasaron existe
    const activityExists = await Activity.findOne({ where: { name } })
    if (activityExists) throw Error("This activity alredy exists");
    if(!countries) throw Error ("Must complete field: countries")
    
    //EL COUNTRY VA POR ID
    const newActivity = await Activity.create({ name, difficulty, duration, season });
    await newActivity.addCountries(countries);

    return newActivity

};

module.exports = createActivity;