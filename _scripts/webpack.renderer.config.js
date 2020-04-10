const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const {
  // dependencies,
  // devDependencies,
  productName,
} = require('../package.json')

// const externals = Object.keys(dependencies)
const isDevMode = process.env.NODE_ENV === 'development'
// const whiteListedModules = ['vue']

const config = {
  name: 'renderer',
  mode: process.env.NODE_ENV,
  devtool: isDevMode ? 'eval' : false,
  entry: {
    renderer: path.join(__dirname, '../src/renderer/main.js'),
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  // externals: externals.filter(d => !whiteListedModules.includes(d)),
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        use: [
          {
            loader: "native-ext-loader",
            //options: {
            //  rewritePath: nodePath
            //}
          },
        ]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            },
          },
        },
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              // eslint-disable-next-line
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|tif?f|bmp|webp|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'imgs/[name]--[folder].[ext]',
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name]--[folder].[ext]',
          },
        },
      },
    ],
  },
  node: {
    __dirname: isDevMode,
    __filename: isDevMode,
  },
  plugins: [
    // new WriteFilePlugin(),
    new HtmlWebpackPlugin({
      excludeChunks: ['processTaskWorker'],
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.ejs'),
      nodeModules: isDevMode
        ? path.resolve(__dirname, '../node_modules')
        : false,
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.PRODUCT_NAME': JSON.stringify(productName),
    }),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js',
      '@': path.join(__dirname, '../src/'),
      src: path.join(__dirname, '../src/'),
      icons: path.join(__dirname, '../_icons/'),
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
  target: 'electron-renderer',
}

/**
 * Adjust rendererConfig for production settings
 */
if (isDevMode) {
  // any dev only config
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  config.plugins.push(
    new ScriptExtHtmlWebpackPlugin({
      async: [/runtime/],
      defaultAttribute: 'defer',
    })
    // new CopyWebpackPlugin([
    //   {
    //     from: path.join(__dirname, '../src/data'),
    //     to: path.join(__dirname, '../dist/data'),
    //   },
    // ])
  )

  // config.optimization = {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // }
}

module.exports = config
