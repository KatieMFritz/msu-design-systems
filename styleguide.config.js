const loaders = require('vue-webpack-loaders');

module.exports = {
  components: 'src/components/**/*.vue',
  defaultExample: true,
  webpackConfig: {
    module: {
      loaders: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader'
        },
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
  },
  serverPort: 8080,
}
