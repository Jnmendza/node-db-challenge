const express = require('express');
const helmet = require('helmet');

const tasksRouter = require('./routers/taskRouter')
const projectsRouter = require('./routers/projectRouter')
const resourcesRouter = require('./routers/resourceRouter')

const server = express();

server.use(helmet())
server.use(express.json())

server.use('/api/tasks', tasksRouter)
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)

server.get('/', (req, res) => {
    res.send('Server is running')
})

module.exports = server;
