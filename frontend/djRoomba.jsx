var React = require('react');
var ReactDOM = require('react-dom');

var DJRoomba = require('./components/app');

document.addEventListener('DOMContentLoaded', function() {
  var root = document.querySelector('#root');
  ReactDOM.render(<DJRoomba/>, root);
});
