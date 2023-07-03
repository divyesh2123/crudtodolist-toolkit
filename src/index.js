import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './Counter';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
  
    <Counter/>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
