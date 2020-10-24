const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

module.exports = withImages(
  withCSS({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
    ...withLess({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    }),
  })
);
