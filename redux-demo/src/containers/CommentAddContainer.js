import {connect} from 'react-redux';
import {addComment} from '../actions/actions.js';
import CommentAdd from '../components/CommentAdd.js';

const mapDispatchToProps = dispatch => ({
	addComment: (id) => dispatch(addComment(id)),
});

export default connect(null, mapDispatchToProps)(CommentAdd);