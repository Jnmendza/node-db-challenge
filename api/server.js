const express = require('express');
const helmet = require('helmet');

// const tasksRouter = require('./routers/tasksRouter')
const projectsRouter = require('./routers/projectRouter.js')

const server = express();

server.use(helmet())
server.use(express.json())

// server.use('/api/tasks', tasksRouter)
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.send('Server is running')
})

module.exports = server;
