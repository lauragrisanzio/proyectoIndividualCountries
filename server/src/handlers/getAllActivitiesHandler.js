const getAllActivities = require("../controllers/getAllActivities");

const getAllActivitiesHandler = async (req, res) => { 

    try {
        const getAll = await getAllActivities()
        return res.status(200).json(getAll)
    } catch (error) {
        return res.status(400).json({error:error.message})
        
    }
};

module.exports = getAllActivitiesHandler;
