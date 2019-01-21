const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: path.join(__dirname, './src/main.js'), // 入口文件 用path.join(__dirname, 'src/index.js')将路径拼接为绝对路径
  output: {
    filename: 'bundle.js', // 文件输出
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin({
      template: './index.html',
      hash: true
    }), // 处理html模版
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader' // 处理以.vue结尾的文件
      },
      {
        test: /\.css$/, // 处理css文件
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/, // 处理图片文件
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',  // npm install babel-loader@7.1.5   八点几的版本会报错
        include: /src/, //只转化src目录下的js
        exclude: /node_modules/ //排除掉node_modules,优化打包速度
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost', // 默认是localhost
    port: 3000, // 端口
    open: true, // 自动打开浏览器
    hot: true // 开启热更新
  },
  resolve: {
    alias: {
    },
    // 省略后缀
    extensions: ['.js', '.json', '.css', '.vue']
  },
  mode: 'production'
}
module.exports = config;