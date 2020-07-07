import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css'
import {store} from './redux/store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store ={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
