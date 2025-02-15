export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  int8View.setInt8(position, value);
  return int8View;
}
