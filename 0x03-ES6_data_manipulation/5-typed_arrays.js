export default function createInt8TypedArray(length, position, value) {
  const ar = new ArrayBuffer(length);
  const dv = new DataView(ar);
  try {
    dv.setInt8(position, value);
  } catch (err) {
    throw new Error('Position outside range');
  }
  return ar;
}
