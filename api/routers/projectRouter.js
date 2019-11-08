const express = require('express')

const projects = require('../helpers/projectModel.js')

const router = express.Router();

router.get('/', (req, res) => {
    projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Could not retrieve projects" })
        })
})

router.post('/', (req, res) => {
    projects.addProject(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Could not post new entry." })
        })
})

module.exports = router;