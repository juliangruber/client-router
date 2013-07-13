
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
