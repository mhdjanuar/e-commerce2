import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

ReactDOM.render(
  // TODO: Change to React.StrictMode once findDOMNode is updated by antd
  <React.Suspense fallback="">
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
