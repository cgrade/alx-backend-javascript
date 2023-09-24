const express = require('express');
const readDatabase = require('./full_server/utils.js');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  try {
    const students = await readDatabase(databasePath);

    const studentsList = Object.values(students).map(students => students.join(', ')).join('\n');

    res.send(`This is the list of our students:\n${studentsList}`);
  } catch (error) {
    res.status(500).send('Error reading database');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
