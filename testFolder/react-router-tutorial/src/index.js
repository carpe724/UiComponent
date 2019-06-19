import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import * as serviceWorker from './serviceWorker';
// import { AppContainer } from 'react-hot-loader';
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();