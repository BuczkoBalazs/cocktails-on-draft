const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(cors());


app.get('/cocktails', (req, res) => {
    res.sendFile(path.join(`${__dirname}/data/cocktails.json`))
});

app.post('/add-fav', (req, res) => {
    let cocktailsJSON = [];
    let cocktails = fs.readFileSync(path.join(`${__dirname}/data/cocktails.json`), err => console.log(err));

    cocktailsJSON = JSON.parse(cocktails)
    let index = cocktailsJSON.map( cocktail => cocktail.id ).indexOf(req.body.id)
    cocktailsJSON[index].favourite = req.body.favourite.toString()

    fs-fs.writeFileSync(path.join(`${__dirname}/data/cocktails.json`), JSON.stringify(cocktailsJSON, null, 4), err => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    });
});


app.listen(3001, () =>{
    console.log("Server is running on port 3001")
});