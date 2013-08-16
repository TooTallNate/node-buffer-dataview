0.0.2 / 2013-08-16
==================

 - Add the V8 test suite for DataView: "v8/test/mjsunit/harmony/dataview-accessors.js"
 - Refactored test case to use our custom DataView implementation and Node.js Buffer instances
 - Added bounds checking for the given offset
 - Added wrapping logic for out-of-range values in the "set*" functions
 - Added argument checking for when not enough arguments are given
 - Throw a TypeError if `new` is not used
 - Coerce `byteOffset` and `byteValue` to ints

0.0.1 / 2013-08-15
==================

 - Initial release
