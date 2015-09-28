'use strict';
var webpack = require('webpack');
var path = require('path');
var express = require('express');

var config = require('./webpack.config');

var serverRendering = require('./out/serverRendering-gen');
var collector = require('./src/backend/serviceLayer/collector.js');
var Promise = require('bluebird');

///////////////////////////////////////////////////////////////////

var app = express();
var compiler = webpack(config[0]);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config[0].output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static('out'));

app.get('*', function (req, res) {
  Promise.coroutine(function* () {
    let data = yield collector.getAppData();
    serverRendering.render(req, res, data);
  })();
});

app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at http://localhost:3000');
});
