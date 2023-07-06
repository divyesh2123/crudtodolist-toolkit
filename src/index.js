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
import UserList from './UserList';
import { Suspense } from 'react';
// import MySagaWithT from './MySagaWithT';

const OtherComponent = React.lazy(() => import('./MySagaWithT'));

ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
    <Provider store={store}>

    <Suspense fallback={<div>Loading...</div>}>

      <OtherComponent/>
      </Suspense>
    <MyRoutes/>

    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
