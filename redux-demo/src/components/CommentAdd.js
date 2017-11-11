import React from 'react';

class CommentAdd extends React.Component {
  constructor(props) {
    super(props);
    const cachedComment = localStorage.getItem('cachedComment');
    this.state = {
      value: cachedComment || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
    localStorage.setItem('cachedComment', this.state.value);  
  }
  
  handleSubmit(event) {
    this.props.addComment(this.state.value);
    this.setState({ value: '' })
    localStorage.setItem('cachedComment', '');
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.value} onChange={this.handleChange} placeholder={"Please add your comment here..."} />
        <input type="submit" value="Add comment"/>
      </form>
    );
  }
}
export default CommentAdd;