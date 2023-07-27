const { Activity } = require("../db");

const createActivity = async (name, difficulty, duration, season, country ) => { 
    const newActivity = await Activity.create({ name, difficulty, duration, season });

    await newActivity.addCountry(country)
    return newActivity
};

module.exports = createActivity;