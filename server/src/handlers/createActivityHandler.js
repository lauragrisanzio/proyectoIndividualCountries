const createActivity = require("../controllers/createActivity");

const createActivityHandler = async (req, res) => {
 
    try {
        const { name, difficulty, duration, season, CountryId } = req.body;
       
        const newActivity = await createActivity(
        { name : name,
          difficulty: difficulty,
          duration: duration,
          season: season,
          CountryId: CountryId}
        );
       return res.status(200).json(newActivity)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
 };

module.exports = createActivityHandler;