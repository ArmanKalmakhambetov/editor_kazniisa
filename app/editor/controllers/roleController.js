const Role = require('../models/Role');

async function getAllRoles(req, res) {
    try {
        const allRoles = await Role.findAll();
        
        return res.status(200).json(allRoles);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createRole(req, res) {
    try {
        const role = await Role.create({
            name: "Admin"
        })
        return res.status(201).json(role);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createRole, getAllRoles
};
