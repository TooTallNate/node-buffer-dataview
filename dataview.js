
/**
 * Module exports.
 */

module.exports = DataView;

/**
 * Very minimal `DataView` implementation that wraps (doesn't *copy*)
 * Node.js Buffer instances.
 *
 *  Spec: http://www.khronos.org/registry/typedarray/specs/latest/#8
 *  MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays/DataView
 *
 * @param {Buffer} buffer
 * @param {Number} byteOffset (optional)
 * @param {Number} byteLength (optional)
 * @api public
 */

function DataView (buffer, byteOffset, byteLength) {
  if (!(this instanceof DataView)) return new DataView(buffer, byteOffset, byteLength);
  if (!Buffer.isBuffer(buffer)) throw new Error('Object must be a Buffer');
  if (null == byteOffset) byteOffset = 0;
  if (null == byteLength) byteLength = buffer.length;
  this.buffer = buffer;
  this.byteOffset = byteOffset;
  this.byteLength = byteLength;
}

/**
 * "Get" functions.
 */

DataView.prototype.getInt8 = function (byteOffset) {
  var offset = this.byteOffset + byteOffset;
  return this.buffer.readInt8(offset);
};

DataView.prototype.getUint8 = function (byteOffset) {
  var offset = this.byteOffset + byteOffset;
  return this.buffer.readUInt8(offset);
};

DataView.prototype.getInt16 = function (byteOffset, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    return this.buffer.readInt16LE(offset);
  } else {
    return this.buffer.readInt16BE(offset);
  }
};

DataView.prototype.getUint16 = function (byteOffset, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    return this.buffer.readUInt16LE(offset);
  } else {
    return this.buffer.readUInt16BE(offset);
  }
};

DataView.prototype.getInt32 = function (byteOffset, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    return this.buffer.readInt32LE(offset);
  } else {
    return this.buffer.readInt32BE(offset);
  }
};

DataView.prototype.getUint32 = function (byteOffset, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    return this.buffer.readUInt32LE(offset);
  } else {
    return this.buffer.readUInt32BE(offset);
  }
};

DataView.prototype.getFloat32 = function (byteOffset, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    return this.buffer.readFloatLE(offset);
  } else {
    return this.buffer.readFloatBE(offset);
  }
};

DataView.prototype.getFloat64 = function (byteOffset, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    return this.buffer.readDoubleLE(offset);
  } else {
    return this.buffer.readDoubleBE(offset);
  }
};

/**
 * "Set" functions.
 */

DataView.prototype.setInt8 = function (byteOffset, value) {
  var offset = this.byteOffset + byteOffset;
  this.buffer.writeInt8(value, offset);
};

DataView.prototype.setUint8 = function (byteOffset, value) {
  var offset = this.byteOffset + byteOffset;
  this.buffer.writeUInt8(value, offset);
};

DataView.prototype.setInt16 = function (byteOffset, value, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    this.buffer.writeInt16LE(value, offset);
  } else {
    this.buffer.writeInt16BE(value, offset);
  }
};

DataView.prototype.setUint16 = function (byteOffset, value, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    this.buffer.writeUInt16LE(value, offset);
  } else {
    this.buffer.writeUInt16BE(value, offset);
  }
};

DataView.prototype.setInt32 = function (byteOffset, value, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    this.buffer.writeInt32LE(value, offset);
  } else {
    this.buffer.writeInt32BE(value, offset);
  }
};

DataView.prototype.setUint32 = function (byteOffset, value, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    this.buffer.writeUInt32LE(value, offset);
  } else {
    this.buffer.writeUInt32BE(value, offset);
  }
};

DataView.prototype.setFloat32 = function (byteOffset, value, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    this.buffer.writeFloatLE(value, offset);
  } else {
    this.buffer.writeFloatBE(value, offset);
  }
};

DataView.prototype.setFloat64 = function (byteOffset, value, littleEndian) {
  var offset = this.byteOffset + byteOffset;
  if (littleEndian) {
    this.buffer.writeDoubleLE(value, offset);
  } else {
    this.buffer.writeDoubleBE(value, offset);
  }
};
