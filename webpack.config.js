/*
	https://gist.github.com/learncodeacademy
	https://www.youtube.com/watch?v=9kJVYpOqcVU

	webpack // test
	NODE_ENV=production webpack // for production

	npm install -S jquery
	npm install -S lodash // ??
	http://kbs0327.github.io/blog/technology/lodash/

	http://mockaroo.com/
*/

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
