var path = require('path');
var webpack = require('webpack');

var definePluginServer = new webpack.DefinePlugin({
  "process.env": {
    BABEL_ENV: JSON.stringify("server")
  }
});

var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  name: 'server rendering',
  target: "node",
  entry: "./src/serverRendering",
  output: {
    //publicPath: '/static/',
    path: path.join(__dirname, '../', 'out'),
    filename: 'serverRendering-gen.js',
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, '../', 'src')
        ],
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },

  plugins: [new ExtractTextPlugin("styles.css")]
};
