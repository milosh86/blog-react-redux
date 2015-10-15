'use strict';
var webpack = require('webpack');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var config = require('./webpack.config');

var serverRendering = require('./out/serverRendering-gen');
var collector = require('./src/backend/serviceLayer/collector.js');
var actionHandler = require('./src/backend/actionHandler');
var setAPIRoutes = require('./src/backend/routeHandlers');

var Promise = require('bluebird');

///////////////////////////////////////////////////////////////////

var app = express();

var compiler = webpack(config[0]);

app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config[0].output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static('out'));

setAPIRoutes(app);

app.get('*', function (req, res, next) {
  collector.getAppData().then(data => {
    req.initialData = data;
    next();
  });
}, serverRendering.renderAndReply);


app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at http://localhost:3000');
});
