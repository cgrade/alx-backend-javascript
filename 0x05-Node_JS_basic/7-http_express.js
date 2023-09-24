const express = require('express');

const countStudents = require('./3-read_file_async');

const child = require('child_process');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status = 200;
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    res.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    res.send('This is hte list of our students\n Cannot load the database');
  });
});

app.listen(port);

module.exports = app;
