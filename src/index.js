// Style
import './css/index.css';

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// App
import App from './js/App';

// Reducers
import rootReducer from './js/reducers';

//
import reportWebVitals from './reportWebVitals';


const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();