const createActivity = require("../controllers/createActivity");

const createActivityHandler = async (req, res) => {
    
    try {
      const { name, difficulty, duration, season, countries } = req.body;
      
        const newActivity = await createActivity(
          name,
          difficulty,
          duration,
          season,
          countries
        );
       return res.status(200).json(newActivity)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
 };

module.exports = createActivityHandler;