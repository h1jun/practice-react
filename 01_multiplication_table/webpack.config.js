const path = require("path");
const webpack = require("webpack");

module.exports = {
    name: "gugudan-setting",
    mode: "development",
    devtool: "eval", // hidden-source-map <- production일 때
    resolve: {
        extensions: [".js", ".jsx"],
    },

    entry: {
        app: "./client",
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    // plugin들의 모음이 preset이다.
                    presets: [
                        // ['프리셋 이름', {설정 요소들}]
                        ["@babel/preset-env", {
                            targets: {
                                browsers: ["> 5% in KR", "last 2 chrome versions"], // browserlist
                            },
                            debug: true,
                        }],
                        ["@babel/preset-react"],
                    ],
                    plugins: []
                },
            }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true })
    ],

    output: {
        filename: "app.js",
        path: path.join(__dirname, "dist"),
    },
};