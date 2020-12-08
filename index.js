const express = require('express');

const server = express();

server.use(express.json());

const port = process.env.PORT || 5000;


server.get('/', (req, res) => {
    res.json({ message: "it works" })
})

server.listen(port, () => {
    console.log(`\n*** server running on port ${port} ***\n`)


})