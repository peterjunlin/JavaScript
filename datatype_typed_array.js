// ArrayBuffer
let buffer = new ArrayBuffer(16);
console.assert(buffer.byteLength == 16);

// DataView - Int32Array
let int32View = new Int32Array(buffer);


var littleEndian = (
    function() {
    var buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
    // Int16Array uses the platform's endianness.
    return new Int16Array(buffer)[0] === 256;
  }
  )();

  console.log(littleEndian); // true or false
  