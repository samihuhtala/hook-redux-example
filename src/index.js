import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./redux"; // tää haetaan itse tehdystä redux-tiedostosta. kts yllä export default createStore...
import Appwithredux from'./Appwithredux'
import App from './App'

ReactDOM.render(<Provider store={store}>
    <Appwithredux />
  </Provider>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
