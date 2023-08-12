export default function getListStudentIds(arrayOfObj) {
  if (Array.isArray(arrayOfObj)) {
    return arrayOfObj.map((elem) => elem.id);
  }
  return [];
}
