const express = require("express");
const mongoose = require("mongoose");
const port = 8080;
const apiRoutes = require("./app/routes/api.routes");
const app = express();
app.use(apiRoutes);

mongoose.connect("mongodb://localhost:27017/recipedb");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro na conexão com o MongoDB"));

app.listen(port, () => {
  console.log(`Server iniciado na porta ${port}...`);
});

module.exports = app;
