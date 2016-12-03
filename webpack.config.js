module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "/public/bundle.js"
    },
    module: {
      preLoaders: [
          { // 프리로더에 jslint를 설정한다. (watch모드에서는 동작 안할 수도 있음)
            test: /\.js$/,
            loader: 'eslint',
            exclude: /(node_modules|bower_components)/
          }
        ],
        loaders: [
            // css로더를 사용하여 번들링한다.
            { test: /\.css$/, loader: 'style!css' },
            // ECMAScript 2015를 사용하기 위한 로더 설정
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /(node_modules|bower_components)/,
              query: {
                presets: ['es2015']
              }
            }
        ]
    }
};
