/**
@file webpack config
@summary minify js files
@note see comments
@install npm install -D terser-webpack-plugin@4.2.3 webpack@^4.0.0 webpack-cli@^3.0.0
*/
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
/** @dev change entrypoint  */
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
/* @param hash */
    filename: 'jefe-[contenthash].js'
/* @param optimization  */
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  mode: "none"
};
