export default function hasValueFromArray(set, array) {
  for (const arrayElem of array) {
    if (!set.has(arrayElem)) {
      return false;
    }
  }
  return true;
}
