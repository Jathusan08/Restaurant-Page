const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    watchFiles: ["src/**/*.html"], // Add your HTML template files here
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "head", // body or head
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single", // This is added when we have more than 1 entry point but in our case we  have only ' index: "./src/index.js"'
    // in future may neeeded more than 1.
  },
  module: {
    rules: [
      {
        // css files
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
      {
        // Loading images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
