
/**
 * Create router.
 */

var Router = require('./');
var route = Router();
var go = route.go;

route(function (match, href) {
  if (match('/')) {
    
    debug('home (' + href + ')');
    
  } else if (match('/posts/:id/:comments?')) {
    
    var id = match.params.id;
    var comments = !! match.params.comments;
    
    debug('post: ' + id + ', comments: ' + comments + ' (' + href + ')');
    
  } else {
    
    debug('404 (' + href + ')');
    
  }
});

setTimeout(function () { go('/posts/13/');
  setTimeout(function () { go('/posts/13/comments');
    setTimeout(function () { go('/blarg');
      setTimeout(function () { go('/');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

function debug (str) {
  var p = document.createElement('p');
  p.appendChild(document.createTextNode(str));
  document.body.appendChild(p);
}