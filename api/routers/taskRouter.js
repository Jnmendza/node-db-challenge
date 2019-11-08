const express = require('express')

const tasks = require('../helpers/taskModel.js')

const router = express.Router();

router.get('/', (req, res) => {
    tasks.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: "Could not retrieve tasks." })
    })
})

router.post('/', (req, res) => {
    tasks.addTask(req.body)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Could not post new task." })
        })
})




module.exports = router;