const path = require('path');

module.exports = {
    name: 'wordrelay-setting', // 웹팩 설정 이름
    mode: 'development', // 실서비스에서는 : production
    devtool: 'eval', // 빠르게
    resolve: {
        extensions: ['.js', '.jsx'] // 이렇게 작성해주면 알아서 client.js 나 client.jsx가 있는지 알아서 확인한다.
    },

    // 입력
    entry: {
        app: ['./client'], // resolve를 작성해줌으로서 확장자를 안 적어줘도 된다.
    },
    
    // 엔트리에 파일을 읽고 모듈을 적용해서 아웃풋으로 뺀다
    module: {
        rules: [
            {
                test: /\.jsx?/, // js랑 jsx 파일에 룰을 적용하겠다.
                loader: 'babel-loader', //js랑 jsx 파일에 바벨 룰을 적용하겠다.
                options: { // 바벨 옵션
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                },
            },
        ],
    },

    // 출력
    output: {
        path: path.join(__dirname, 'dist'), // 현재 폴더 경로 안에 들어 있는 dist 폴더 경로를 간편하게 표기
        filename: 'app.js',
    }

};