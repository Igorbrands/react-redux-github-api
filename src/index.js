import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global';
import App from './containers/App';
import {store} from './modules';
import { Provider } from 'react-redux';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,  document.getElementById('root')
);


