const webpack = require('webpack');
console.log("process", process.env);
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        API_BASE: JSON.stringify(process.env.API_BASE),
        NAME: JSON.stringify(process.env.NAME),
      }
    })
  ]
};
