const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  // Read the CSV file into memory
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {

      // If there was an error reading the file, reject the Promise
      if (error) {
        reject(Error('Cannot load the database'));
      }

      // Otherwise, parse the CSV file
      else {
        const lines = data.toString().split('\n');

        // Iterate over each line in the CSV file
        for (let i = 0; i < lines.length; i += 1) {

          // If the line is not empty
          if (lines[i]) {

            // Increment the length counter
            length += 1;

            // Split the line into fields
            const field = lines[i].toString().split(',');

            // If the student is already in the `students` object, add them to the list of students for their field of study
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            }

            // Otherwise, create a new list of students for the student's field of study
            else {
              students[field[3]] = [field[0]];
            }

            // If the field of study is already in the `fields` object, increment the count of students in that field
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            }

            // Otherwise, create a new count of students for the field of study
            else {
              fields[field[3]] = 1;
            }
          }
        }

        // Calculate the total number of students
        const l = length - 1;

        // Log the total number of students to the console
        console.log(`Number of students: ${l}`);

        // Iterate over the `fields` object and log the number of students in each field of study, along with a list of the students in that field
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }

        // Resolve the Promise with the original CSV data
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;