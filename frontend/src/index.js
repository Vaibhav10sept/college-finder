import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Preloader from './Components/preloader/Preloader';
import './index.css';
// import Preloader from './components/preloader/Preloader';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter
} from "react-router-dom";
const OtherComponent = React.lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={<Preloader />}>
    <BrowserRouter>
      <OtherComponent />

    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
