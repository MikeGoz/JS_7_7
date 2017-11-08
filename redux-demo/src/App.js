import React from 'react';
import './App.css';
import CommentsListContainer from './containers/CommentsListContainer';

const App = () => {
  return (
    <div className="App">
      <h2>Comments :</h2>
      <CommentsListContainer />
    </div>
  );
};
export default App;
