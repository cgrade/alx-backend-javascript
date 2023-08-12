export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  if (!Array.isArray(listOfStudents)) throw new TypeError(`${listOfStudents} must be an Array`);
  // filter the student's list by city
  return listOfStudents
    .filter((student) => student.location === city)
    .map((filstudent) => {
      newGrades.map((studentGrade) => {
        if (studentGrade.studentId === filstudent.id) {
          /* eslint no-param-reassign: "error" */
          filstudent.grade = studentGrade.grade;
        }
        if (!Object.prototype.hasOwnProperty.call(filstudent, 'grade')) {
          filstudent.grade = 'N/A';
        }
        return filstudent;
      });
      return filstudent;
    });
}
