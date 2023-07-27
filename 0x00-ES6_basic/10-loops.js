export default function appendToEachArrayValue(array, appendString) {
  let myArray = [];
  for (let idx of array) {
    myArray.push(appendString + idx);
  }
  
  return myArray;
};

