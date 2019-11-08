const express = require('express')

const resources = require('../helpers/resourceModel')

const router = express.Router()

router.get('/', (req, res) => {
    resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Could not retrieve resources." })
        })
})

router.post('/', (req,res) => {
    resources.addResource(req.body)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Could not post new resource." })
        })
})

module.exports = router;
