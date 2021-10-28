const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    name: "wordrelay-setting",
    mode: "development",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    entry: {
        app: "./client",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: { browsers: ["last 2 chrome versions"] },
                                debug: true,
                            },
                        ],
                        "@babel/preset-react",
                    ],
                    plugins: ["react-refresh/babel"],
                },
                exclude: path.join(__dirname, "node_modules"),
            },
        ],
    },
    plugins: [new ReactRefreshWebpackPlugin()],
    output: {
        path: path.join(__dirname, "dist"), // 실제의 경로
        filename: "[name].js",
        publicPath: "/dist", // 웹펙 데브서버가 사용하는 경과물간의  상대 경로 app.use('/dist', express.static(__dirname, 'dist'))
    },
    devServer: {
        devMiddleware: { publicPath: "/dist" },
        static: { directory: path.resolve(__dirname) },
        hot: true,
    },
};