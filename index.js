const express = require('express');
const Players = require('./models/dbHelpers');

const server = express();

server.use(express.json());

const port = process.env.PORT || 5000;


server.get('/', (req, res) => {
    res.json({ message: "it works" } )
});


server.get('/api/players', (req, res) => {
    Players.findAll()
    .then(lessons => {
        res.status(200).json(lessons)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

server.post('/api/players', (req, res) => {
    Players.add(req.body)
    .then(lesson => {
        res.status(200).json(lesson)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

server.listen(port, () => {
    console.log(`\n*** server running on port ${port} ***\n`)

});

