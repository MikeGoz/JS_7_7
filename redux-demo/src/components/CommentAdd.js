import React from 'react';

class CommentAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
    
    localStorage.setItem('cachedComment',this.state.value);
    console.log(localStorage.getItem('cachedComment')); 
    
    //const cacheExist = localStorage.getItem('cachedComment');
    //console.log(cacheExist); 
    //if (cacheExist) {
    // this.state.value.setState(cacheExist);
    //return;
    //}      
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
        <textarea value={this.state.value} onChange={this.handleChange} placeholder={"Please add your comment here..."} />
        <input type="submit" value="Add comment"/>
      </form>
    );
  }
}
export default CommentAdd;
