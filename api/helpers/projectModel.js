const db = require('../../data/db-config.js');

module.exports = {
    getProjects,
    addProject
}

function getProjects() {
    return db('projects')
        .then(projects => {
            projects.map( project => {
                if(project.completed) {
                    project.completed = true
                } else {
                    project.completed = false
                }
            })
            return projects
        })
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => {
            return db('projects')
                .where({ id })
                .then(newProject => {
                return newProject
            })
        })
}