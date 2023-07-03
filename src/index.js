import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './Counter';
import DisplayDataWithGrid from './DisplayDataWithGrid';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
    <Provider store={store}>

      <Header/>
  
    <MyRoutes/>

    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
