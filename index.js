const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4800;

app.use(express.json())
app.use(require('./routers/books.route'))
app.use(require('./routers/authors.route'))
app.use(require('./routers/genres.route'))
app.use(require('./routers/reviews.route'))


mongoose
  .connect("mongodb+srv://Kolizey08:Maga@cluster0.nmzoj5b.mongodb.net/Books")
  .then(() => console.log("Соеденение со сервером установлено"))
  .catch(() => console.log("Ошибка при соеденение со сервером"));

  app.listen(port, ()=> {
    console.log('Сервер успешно запущен');
  })