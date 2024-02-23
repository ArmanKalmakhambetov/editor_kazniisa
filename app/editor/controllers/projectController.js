const Project = require('../models/Project');
const UserProject = require('../models/User_projects');

async function getAllUserProjects(req, res) {
    try {
        //TODO: заменить на аутентифицированного юзера
        const userId = 1;
        const userProjects = await UserProject.findAll({
            where: userId,
            include: [Project]
        })
        console.log(userProjects)
        const projects = userProjects.map(project => project.Project);
        console.log(projects)
        return res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createProject(req, res) {
    try {
        const { project_name } = req.body;
        const userId = 1; // Предполагается, что информация о текущем пользователе доступна через req.user

        // Создаем новый проект
        const newProject = await Project.create({
            project_name
        });

        // Создаем запись в таблице user_projects для установки связи между пользователем и проектом
        await UserProject.create({
            user_id: userId,
            project_id: newProject.id
        });

        return res.status(201).json(newProject);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createProject,
    getAllUserProjects
};
