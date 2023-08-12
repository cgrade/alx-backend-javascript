export default function getStudentsByLocation(array, city) {
  if (!Array.isArray(array)) throw new TypeError('not an array');
  return array.filter((obj) => obj.location === city);
}
