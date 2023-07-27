export default function createEmployeesObject(department, employees) {
  const obj = {
    [department]: employees,
  };
  return obj;
}
