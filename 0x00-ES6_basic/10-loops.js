export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    array[indexOf(idx)] = appendString + idx;
  }

  return array;
}
