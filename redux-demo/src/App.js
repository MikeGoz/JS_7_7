import React from 'react';
import './App.css';
import CommentsListContainer from './containers/CommentsListContainer.js';
import CommentAddContainer from './containers/CommentAddContainer.js';

const App = () => {
  return (
    <div className="App">
      <h2>Comments :</h2>
      <CommentAddContainer />
      <CommentsListContainer />
    </div>
  );
};
export default App;
