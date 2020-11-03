const path = require("path");
const PATHS = require("./path.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

//配置别名需要的方法
function resolve(dir) {
  return path.join(__dirname, `../${dir}`);
}

module.exports = {
  /* 入口文件 */
  entry: "./src/main.js",

  /* 出口文件 */
  output: {
    path: path.resolve(__dirname, PATHS["dist"]),
    filename: "assets/js/[name].[hash].js",
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }, // options 在 .babelrc 定义
      },
      {
        //字体
        test: /\.(eot|woff2|woff|ttf|svg)/,
        use: [{
          loader: "url-loader",
          options: {
            name: "[name][hash].[ext]",
            outputPath: "dist/assets/fonts",
          },
        }, ],
      },
      /* eslint */
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "测试标题",
      template: path.resolve(PATHS["public"], "index.html"),
      hash: true,
      minify: {
        removeAttributeQuotes: true, // 去除多余引号
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
      },
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    // 设置别名
    alias: {
      "@": resolve("src"),
      mixins: resolve("src/mixins"),
      components: resolve("src/components"),
      assets: resolve("src/assets"),
      api: resolve("src/api"),
      views: resolve("src/views"),
      styles: resolve("src/styles"),
      config: resolve("src/config"),
    },
  },
};