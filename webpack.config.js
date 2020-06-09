const path = require('path');

module.exports = {
  mode:"development",
    entry:{
      index:"./source/index.js",
      about:"./source/about.js"
    },
    output:{
      path:path.resolve(__dirname,"public")
      ,filename:'[name]_bundle.js'
    },
    module:{
      rules:[
        {
          test: /\.css$/,
          use:[
            'style-loader',
            'css-loader',
          ]
        }
      ]
    }
    ,
    devServer: {
        host : '127.0.0.1',
        contentBase: path.join(__dirname, "/"),
        compress: true,
        hot : true,
        inline: true,
        port: 9000,
        open : true
      }
};