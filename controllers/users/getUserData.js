// Sample Controller
const models = require('./../../models');
const user = models.User;

const getUserData = async (req, res) => {
    try {
        const allUsers = await user.findAll();

        // SHOW JSON
        res.status(200).json({
            allUsers
        });
    }
    catch (e){
        res.status(500).json({
            status: "error"
        });
    }
}

module.exports = getUserData;