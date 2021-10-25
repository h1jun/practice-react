// 필요로 하는 라이브러리나 패키지 등을 가져오는 부분
const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("홍길동");
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('')
      inputRef.current.focus()
    } else {
      setResult('땡');
      setValue('')
      inputRef.current.focus()
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input
          id="wordInput"
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        />
        <button>클릭!</button>
        <div>{result}</div>
      </form>
    </>
  );
};

// 내가 쪼갠 컴포넌트를 밖에서 사용할 수 있도록 해주는
module.exports = WordRelay;