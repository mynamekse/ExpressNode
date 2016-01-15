var nunjucks  = require('nunjucks');
var express   = require('express');
var app       = express();

app.listen(3012);

nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

app.get('/', function(req, res) {
  res.render('index.html', {
    title : 'My First Nunffffffffffffffffffffjucks Page',
    items : [
      { name : 'iteddddddddddddddm #1' },
      { name : 'item #2' },
      { name : 'item #3' },
      { name : 'item #4' },
    ]
  });
});
