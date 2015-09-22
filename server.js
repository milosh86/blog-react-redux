require('./babelHook');

var webpack = require('webpack');
var path = require('path');
var express = require('express');

var config = require('./webpack.config');

var serverRendering = require('./src/serverRendering');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  serverRendering.render(req, res);
  //res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at http://localhost:3000');
});
