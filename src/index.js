import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './Counter';
import DisplayDataWithGrid from './DisplayDataWithGrid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import Header from './Header';
import UserList from './UserList';
import { Suspense } from 'react';
import BuggyCounter from './BuggyCounter';
import { ErrorBoundary } from "react-error-boundary";
import Button from './Button';
import Home from './Home';
import About from './About';
import Posts from './Posts';
import NewPost from './NewPost';
import Post from './Post';
// import MySagaWithT from './MySagaWithT';

const OtherComponent = React.lazy(() => import('./MySagaWithT'));

ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
  

    <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='posts' element={<Posts />}>
                    <Route path='new' element={<NewPost />} /> {/*A nested route!*/}
                    <Route path=':postId' element={<Post />} /> {/*A nested route!*/}
                </Route>
            </Routes>
 
  
    {/* <ErrorBoundary fallback={<div>Something went wrong</div>} >
     
      <BuggyCounter/>

    
     
    </ErrorBoundary>
     */}

   
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
