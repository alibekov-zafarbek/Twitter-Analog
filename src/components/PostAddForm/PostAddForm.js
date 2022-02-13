import "./PostAddForm.css";
import { Component } from "react";

class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onValueChange(e) {
    this.setState({input: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.onAdd(this.state.input)
    this.setState({input:''})
  }
  render() {
    const { input } = this.state
    return (
      <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
        <input
          type="text"
          placeholder="What are you thinking about ?"
          className="form-control new-post-label"
          value={input}
          onChange={this.onValueChange}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
        >
          Add Post
        </button>
      </form>
    );
  }
}

export default PostAddForm;
