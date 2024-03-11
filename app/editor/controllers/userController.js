const User = require('../models/User');

async function getAllUsers(req, res) {
    try {
        
        const allUsers = await User.findAll();
        
        return res.status(200).json(allUsers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createUser(req, res) {
    try {
        const user = User.create({
            fullName: "arman K",
            password: "123",
            role_id: 1,
            email: "arman458792",
        })
        return res.status(201).json(user)
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createUser, getAllUsers
};
