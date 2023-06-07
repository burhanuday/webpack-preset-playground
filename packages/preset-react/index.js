const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);

  const cwd = process.cwd();

  return {
    mode,
    entry: "./src/index.js",
    output: {
      publicPath: "/",
      path: path.resolve(cwd, "build"),
      filename: "bundled.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: "last 2 versions",
                  },
                  modules: false,
                  loose: false,
                },
              ],
            ],
          },
        },
      ],
    },
  };
};
