import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {GlobalStyle} from './styles/globalStyle'
import {Provider} from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
<Provider store={store}>
   <BrowserRouter>
     <App />
     <GlobalStyle/>
   </BrowserRouter>
</Provider>
, document.getElementById('root'));

