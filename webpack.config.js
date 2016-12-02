var webpack = require("webpack");

module.exports = {
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/main"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    //preLoaders: [
    //  {
    //    test: /\.ts$/,
    //    loader: 'tslint-loader',
    //    exclude: [/vendor.ts/, /main.ts/]
    //  }
    //],
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  //tslint: {
  //  emitErrors: true,
  //  failOnHint: false,
  //  configFile: require('./tslint.json')
  //},
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/vendor.bundle.js"),
  ]
}
