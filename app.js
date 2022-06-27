const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //   console.log(__dirname);
  res.send("Hello World!");
});

app.get("/servicios", (req, res) => {
  res.send("Estas en la pagina de servicios!");
});

app.listen(port, () => {
  console.log(`Servidor a su servicio en el puerto: `, port);
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});
