var path = require('path');
var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  "process.env": {
    __BROWSER__: JSON.stringify(true)
  }
});

var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = [
  {
    target: "web",
    devtool: 'eval',
    //context: path.join(__dirname, 'src'),
    entry: [
      'webpack-hot-middleware/client',
      './src/app'
    ],
    output: {
      publicPath: '/static/',
      path: path.join(__dirname, 'out'),
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      definePlugin
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: [
            path.join(__dirname, 'src')
          ],
          loaders: ['babel']
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
        }
      ]
    },
    join: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.js', '.json', '.coffee']
    }
  },
  {
    target: "node",
    entry: "./src/serverRendering",
    output: {
      //publicPath: '/static/',
      path: path.join(__dirname, 'out'),
      filename: 'serverRendering-gen.js',
      libraryTarget: "commonjs2"
    },

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: [
            path.join(__dirname, 'src')
          ],
          loaders: ['babel']
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }
      ]
    },

    plugins: [new ExtractTextPlugin("styles.css")]
  }
];
