// ArrayBuffer
let buffer = new ArrayBuffer(16);
console.assert(buffer.byteLength == 16);

// DataView - Int32Array
let int32View = new Int32Array(buffer);
