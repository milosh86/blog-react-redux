var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

var definePluginClient = new webpack.DefinePlugin({
  "process.env": {
    __BROWSER__: JSON.stringify(true)
  }
});

var definePluginServer = new webpack.DefinePlugin({
  "process.env": {
    BABEL_ENV: JSON.stringify("server")
  }
});

var ExtractTextPlugin = require("extract-text-webpack-plugin");

// babel transforms doesn't work in server rendering part, so use it only for client side code
// .babelrc seems to have the highest priority during transpiling with babel-loader
var babelrc = fs.readFileSync('./.babelrc');
var babelLoaderQuery = {};

try {
  babelLoaderQuery = JSON.parse(babelrc);
} catch (e) {
  console.error('Parsing .babelrc failed!');
  throw e;
}

babelLoaderQuery.plugins = ["react-transform"];
babelLoaderQuery.extra = {
  "react-transform": {
    "transforms": [{
      "transform": "react-transform-hmr",
      "imports": ["react"],
      "locals": ["module"]
    },
      {
        "transform": "react-transform-catch-errors",
        "imports": ["react", "redbox-react"]
      }]
  }
};

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
      definePluginClient
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: [
            path.join(__dirname, 'src')
          ],
          loader: 'babel?' + JSON.stringify(babelLoaderQuery)
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
          loader: 'babel'
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
