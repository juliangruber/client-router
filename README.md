
# client-router

For single page app routing.

**Try it out on [requirebin](http://requirebin.com/?gist=6188665)!**

## Usage

Listen for page change events:

```js
var Router = require('client-router');
var route = new Router();
var go = route.go;

route(function (match, href) {
  if (match('/')) {
    // home page
  }
  if (match('/posts/:id/:comments?')) {
    var id = match.params.id;
    var comments = !! match.params.comments;
    // post page
  }
});

// go to a page
go('/posts/13');
```

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install client-router
```

Then bundle for the browser using [browserify](https://github.com/substack/node-browserify).

## Contributors

[@juliangruber](https://github.com/juliangruber)

[@hij1nx](https://github.com/hij1nx)

## License

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

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
