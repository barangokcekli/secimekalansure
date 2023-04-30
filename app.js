const express = require('express');
const moment = require('moment');
const port = process.env.PORT || 3000;
const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
  const electionDate = moment('14/05/2023 08:00', 'DD/MM/YYYY HH:mm');
  const now = moment();
  const duration = moment.duration(electionDate.diff(now));
  let days = Math.floor(duration.asDays());
  let hours = Math.floor(duration.asHours() % 24);
  let minutes = Math.floor(duration.asMinutes() % 60);
  let seconds = Math.floor(duration.asSeconds() % 60);
  res.render('index', {days: days, hours: hours, minutes: minutes, seconds: seconds});
});

app.listen(port, () => {
  console.log(`Server is running`);
});
