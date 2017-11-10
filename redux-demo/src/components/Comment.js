import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
<li>
  {text} <span>....[votes: {votes}] ...</span> 
  <button onClick={() => thumbUpComment(id)}>Yes</button>
  <button onClick={() => thumbDownComment(id)}>No</button>
  <button onClick={() => removeComment(id)}>Del</button>
</li>;

export default Comment;

