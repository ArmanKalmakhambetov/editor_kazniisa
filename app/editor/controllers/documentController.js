const Project = require("../models/Project");
const ProjectDocuments = require("../models/Project_documents");
const Document = require("../models/Document");

async function getAllProjectDocuments(req, res) {
    try {
        const projectId = req.project.id;
        const projectDocuments = await ProjectDocuments.findAll({
            where: projectId,
            include: [Document]
        })
        console.log(projectDocuments)
        const documents = projectDocuments.map(document => document.Document);
        
        return res.status(200).json(documents);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAllProjectDocuments
}