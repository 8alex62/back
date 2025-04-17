const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userApiRoute = require("./routes/userApiRoutes");

// charge le fichier de configuration
dotenv.config();

// crée une app express
const app = express();

// effectue la connection a mangoDB
mongoose.connect(process.env.MONGO_CONNECTION)
    .then(() => console.log("Connexion à MongoDB a réussie"))
    .catch((error) => console.log("Connexion à MongoDB a échouée : " + error));


// parse pour le json
app.use(bodyParser.json());

// endpoint de l'api
app.use("/api/users", userApiRoute);


// lance le serveur express
app.listen(8080, () => {
    console.log("Le serveur est démarré");
    });    