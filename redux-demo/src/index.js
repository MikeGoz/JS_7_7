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
const testComment = 'test comment';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
store.dispatch(addComment('1 comment '));
store.dispatch(addComment('2 comment '));
store.dispatch(addComment('3 comment '));
store.dispatch(addComment('4 comment '));
store.dispatch(addComment('5 comment '));
store.dispatch(addComment(testComment));
store.dispatch(addComment());

registerServiceWorker();

