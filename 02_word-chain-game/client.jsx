const { Component } = require('react');
const React = require('react');
const ReactDom = require('react-dom');

// 쪼갠 파일을 필요한 것만 가져와서 합친다.
const WordRelay = require('./WordRelay')

ReactDom.render(<WordRelay />, document.querySelector('#root'));