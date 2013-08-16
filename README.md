buffer-dataview
===============
### Minimal DataView implementation that works with Node.js Buffers

This module provides a very minimal [DataView][] implementation. Node.js already
comes with a DataView implementation, but it only works with `ArrayBuffer`
instances, and not Node's preferred `Buffer` type. This is mostly useful when
re-using previously written code which interacts with `DataView` instances
rather than Node.js Buffers.

The `DataView` instances simply proxy the invoked instance method to the
equivalent [Buffer API][] call.

Note that the `buffer` property of the `DataView` instance is the Node.js `Buffer`
instance, and _not_ a converted `ArrayBuffer` or something else like that. There's
no copying that happens here, it's just a "view"...

Installation
------------

Install with `npm`:

``` bash
$ npm install buffer-dataview
```


Example
-------

``` js
var DataView = require('buffer-dataview');

var buffer = new Buffer(4);
var view = new DataView(buffer);

// set a "float" in the data view
view.setFloat32(0, 1337.1234, true);

// ensure that the original Buffer was modified
console.log(buffer.readFloatLE(0));
// → 1337.1234130859375
```


License
-------

(The MIT License)

Copyright (c) 2013 Nathan Rajlich &lt;nathan@tootallnate.net&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[DataView]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays/DataView
[Buffer API]: http://nodejs.org/docs/latest/api/buffer.html
