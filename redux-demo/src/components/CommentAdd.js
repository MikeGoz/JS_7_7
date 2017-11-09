import React from 'react';

class CommentAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please add your comment...'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    this.props.addComment(this.state.value); 
    //this.props.dispatch(addComment(this.state.value)) ??
    //this.props.dispatch(this.state.value); ?
    //alert('Your comment: ' + this.state.value) ok !!!
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Add comment" />
      </form>
    );
  }
}
export default CommentAdd;