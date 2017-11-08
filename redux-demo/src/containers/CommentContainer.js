import {connect} from 'react-redux';
import Comment from '../components/Comment.js';
import {addComment, thumbUpComment, thumbDownComment} from '../actions/actions.js'

const mapDispatchToProps = dispatch => ({
  addComment: (id) => dispatch(addComment(id)),
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);