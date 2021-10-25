// 필요로 하는 라이브러리나 패키지 등을 가져오는 부분
const React = require('react')
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: '홍길동',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "딩동댕",
        word: this.state.value,
        value: "",
      });
      this.input.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.input.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };



  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>최고!</button>
          <div>{this.state.result}</div>
        </form>
      </>
    );
  }
}

// 내가 쪼갠 컴포넌트를 밖에서 사용할 수 있도록 해주는
module.exports = WordRelay;