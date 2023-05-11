const express = require('express');
const moment = require('moment');
const port = process.env.PORT || 3000;
const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running`);
});
