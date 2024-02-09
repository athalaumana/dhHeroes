const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/views/index.html")));        //Usando path.join
app.get("/babbage", (req, res) => res.sendFile(path.resolve("./views/babbage.html")));      //Usando path.resolve
app.get("/berners-lee", (req, res) => res.sendFile(path.join(__dirname, "/views/berners-lee.html")));
app.get("/clarke", (req, res) => res.sendFile(path.join(__dirname, "/views/clarke.html")));
app.get("/hamilton", (req, res) => res.sendFile(path.join(__dirname, "/views/hamilton.html")));
app.get("/hooper", (req, res) => res.sendFile(path.join(__dirname, "/views/hooper.html")));
app.get("/lovelace", (req, res) => res.sendFile(path.join(__dirname, "/views/lovelace.html")));
app.get("/turing", (req, res) => res.sendFile(path.join(__dirname, "/views/turing.html")));


app.listen(3030, () => console.log("Servidor Corriendo"));

