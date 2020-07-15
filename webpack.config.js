const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./app/index.jsx",
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },
  devtool: "#sourcemap",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  resolve: {
    modules: ["app", "node_modules"],
    extensions: [".js", ".jsx"]
  }
};
