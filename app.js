const importFunc = require("./func")

const express = require('express');
const path = require('path');

const app = express ();
const port = process.env.PORT || 3000;

app.set("view engine", 'hbs');
app.use("/assets", express.static(path.join(__dirname, "./assets")))
app.use("/js", express.static(path.join(__dirname, "./js")))

app.get("/", function (req, res){

    const sample = () => {
        return "próba"
    }
    res.render("index", {
        pageTitle: "Lekcja node.js 25.04",
        subTitle: importFunc.someTitle,
        newVar: sample()
    })
})

app.get("/druga", function (req, res){
    res.render("druga")
})


app.listen(port, (err) => {
    console.log("serwer dziala na porcie", port)

    if (err) {return console.log("bład serwera", err)}
})


