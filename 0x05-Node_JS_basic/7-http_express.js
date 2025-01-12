const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then(() => {
      res.send('This is the list of our students');
    })
    .catch((error) => {
      res.send(error.message);
    });
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
