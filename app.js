const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const sequelize = require("./database/db");
const app = express();
require("./database/associate");

app.use(cors()); //Habilitamos peticiones (GET - PUT - POST - DELETE)
app.use(logger("dev")); //Muestra peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // ?

//Defino las rutas

app.use("/", require("./routes"));

app.listen(5000, () => {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Nos hemos conectado a la base de datos");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
  console.log("Servidor iniciado en el puerto 5000");
});
