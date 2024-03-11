const ProjectDocuments = require("../models/Project_documents");
const Document = require("../models/Document");
const { Op } = require("sequelize");

async function getAllProjectDocuments(req, res) {
    try {
        const projectId = 1;
        const projectDocuments = await ProjectDocuments.findAll({
            where: projectId,
            include: [Document]
        })
        console.log(projectDocuments)
        const documents = projectDocuments.map(document => document.Document);
        
        return res.status(200).json(documents );
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createDocument(req, res) {
    try {
        
        //TODO: заменить на аутентифицированного юзера
        const projectId = 1; // Предполагается, что информация о текущем пользователе доступна через req.user

        // Создаем новый проект
        const newDocument = await Document.create({
            document_name: "EIR",
            document_content: {
                "time" : 1591855438933,
                  "blocks" : [
                      {
                          "type" : "header",
                          "data" : {
                              "text" : "Editor.js",
                              "level" : 2
                          }
                      },
                    ]
            }
        })

        // Создаем запись в таблице user_projects для установки связи между пользователем и проектом
        await ProjectDocuments.create({
            project_id: projectId,
            document_id: newDocument.id
        });

        return res.status(201).json(newDocument);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getDocumentById(req, res) {
    try {
        const documentId = req.params.id;
        console.log(documentId)
        const document = await Document.findAll({
            where: {
                id: {
                    [Op.eq]: documentId
                }
            },
        })
        
        return res.status(200).json(document);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getAllProjectDocuments,
    createDocument,
    getDocumentById,

}