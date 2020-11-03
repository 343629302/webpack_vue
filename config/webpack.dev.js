const webpack = require("webpack");
const {
  merge
} = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  /* 模式 */
  mode: "development",
  /* sorce-map */
  devtool: "cheap-module-source-map",
  /* 本地服务 */
  devServer: {
    inline: true, //实时刷新
    hot: true, //开启热更新
    proxy: {
      "/api": {
        target: "http://192.168.0.167:8096",
        wx: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
  module: {
    /* 规则 */
    rules: [{
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      },
    ],
  },
  /* 插件 */
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新
  ],
};

module.exports = merge(commonConfig, devConfig);