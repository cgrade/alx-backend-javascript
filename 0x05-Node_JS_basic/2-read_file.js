const fs = require('fs');

const { parse } = require('csv-parse');

const sweArr = [];

function countStudents(path) {
  fs.createReadStream(path)
    .pipe(parse({ delimiter: ',', from_line: 2 }))
    .on('error', () => {
      throw new Error('Cannot load the databse');
    })
    .on('data', (row) => {
      sweArr.push(row);
    })
    .on('end', () => {
      const numOfStudent = sweArr.length;
      const csStudents = [];
      const sweStudents = [];
      const listOfFirstNamesinCS = [];
      const listOfFirstNamesinswe = [];

      for (const student of sweArr) {
        if (student[3] === 'CS') {
          csStudents.push(student);
        } else {
          sweStudents.push(student);
        }
      }
      csStudents.forEach((student) => {
        listOfFirstNamesinCS.push(student[0]);
      });

      sweStudents.forEach((student) => {
        listOfFirstNamesinswe.push(student[0]);
      });

      console.log(`Number of students: ${numOfStudent}`);
      console.log(`Number of students in CS: ${csStudents.length} List: ${listOfFirstNamesinCS.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents.length} List: ${listOfFirstNamesinswe.join(', ')}`);
    });
}

module.exports = countStudents;
