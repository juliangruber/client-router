# client-router

For single page app routing.

## Usage

Listen for page change events:

```js
var router = require('client-router');

router.on('route', function (match, href) {
  if (match('/')) {
    // home page
  }
  if (match('/posts/:id/:comments?')) {
    var id = match.params.id;
    var comments = !! match.params.comments;
    // post page
  }
});
```

Go to a page:

```js
var go = require('client-router').go;

go('/posts/13');
```

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install client-router
```

Then bundle for the browser using [browserify](https://github.com/substack/node-browserify).

## License

Copyright (c) 2013 Julian Gruber &lt;julian@wayla.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
