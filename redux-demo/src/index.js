import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer.js';
import { addComment } from './actions/actions.js';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

store.dispatch(addComment('1 comment bla bla bla'));
store.dispatch(addComment('2 comment bla bla bla'));
store.dispatch(addComment('3 comment bla bla bla'));
store.dispatch(addComment('4 comment bla bla bla'));
store.dispatch(addComment('5 comment bla bla bla'));

registerServiceWorker();

