// 필요로 하는 라이브러리나 패키지 등을 가져오는 부분
const React = require('react')
const { Component } = React;

class WordRelay extends Component {
    state = {
        text: 'Hello'

    };

    render () {
        return <h1>{this.state.text}</h1>
    }
}

// 내가 쪼갠 컴포넌트를 밖에서 사용할 수 있도록 해주는
module.exports = WordRelay;