const createActivity = require("../controllers/createActivity");

const createActivityHandler = async (req, res) => {
    
    try {
        const { name, difficulty, duration, season } = req.body;
        const newActivity = await createActivity(
          name,
          difficulty,
          duration,
          season,
        );
        res.status(200).json(newActivity)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
 };

module.exports = createActivityHandler;