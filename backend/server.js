const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();

app.use(express.json());
app.use(cors());


app.get('/cocktails', (req, res) => {
    res.sendFile(path.join(`${__dirname}/data/cocktails.json`))
});

app.listen(3001, () =>{
    console.log("Server is running on port 3001")
});