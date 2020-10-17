const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");

module.exports = (_, options) => {
  let plugins = [
    new HtmlWebpackPlugin({
      template: "./template.html",
    }),
    new miniCss({
      filename: "style.[contenthash].css",
    }),
  ];
  if (options.mode === "production") {
    plugins = [new CleanWebpackPlugin(), ...plugins];
  }

  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/docs"),
      filename: "[name].[contenthash].js",
    },
    plugins,
    optimization: {
      runtimeChunk: "single",
      moduleIds: "hashed",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(s*)css$/,
          use: [miniCss.loader, "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "img",
              },
            },
          ],
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, "docs"),
      historyApiFallback: true,
    },
  };
};
