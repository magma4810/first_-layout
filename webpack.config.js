const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.ts"),
    services: path.resolve(__dirname, "./src/services.ts"),
    workPhoto: path.resolve(__dirname, "./src/workPhoto.ts"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["main"], // указать точку входа для данного HTML-файла
    }),
    new HtmlWebpackPlugin({
      template: "./public/services.html",
      filename: "services.html",
      chunks: ["services"], // указать другую точку входа для данного HTML-файла
    }),
    new HtmlWebpackPlugin({
      template: "./public/workPhoto.html",
      filename: "workPhoto.html",
      chunks: ["workPhoto"], // указать другую точку входа для данного HTML-файла
    }),

    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      proxy: "http://127.0.0.1:8080/",
      notify: true, // disable the BrowserSync notification
    }),
  ],
};
