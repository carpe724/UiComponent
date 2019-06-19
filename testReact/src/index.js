import React from 'react';
import ReactDOM from 'react-dom';
 
const title = '안녕 재호야';
const element = <h1>Hello, world!</h1>;
 
ReactDOM.render(
  <div>
    {title}<br/>
  </div>,
  
  document.getElementById('root')
);

module.hot.accept();