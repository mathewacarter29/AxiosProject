import React, { Component } from "react";
import classes from "./SelectedPost.module.css";
import axios from "axios";

const DEFAULT_TEXT = "No selected post";
class SelectedPost extends Component {
  state = {
    title: DEFAULT_TEXT,
    body: DEFAULT_TEXT
  };

  //Gets the selected post from https://jsonplaceholder.typicode.com/posts/
  componentDidUpdate(prevProps, prevState, snapshot) {
    //0 is the sentinal value set in Layout.js since there is no post with ID 0
    if (this.props.id !== prevProps.id && this.props.id !== 0) {
      axios.get("/posts/" + this.props.id).then(response => {
        const data = response.data;
        this.setState({
          title: data.title,
          body: data.body
        });
      });
    }
  }

  //Delete selected post
  //Does not really delete the post from the database since it is a dummy backend,
  //  so we console.log the delete request
  //.catch(error => {}) will catch an error if the wrong url is used
  deleteHandler = () => {
    axios
      .delete("/posts/" + this.props.id)
      .then(response => {
        console.log(response);
        this.setState({ title: DEFAULT_TEXT, body: DEFAULT_TEXT });
        this.props.resetId();
      })
      .catch(error => {
        console.log("Error!");
      });
  };

  render() {
    return (
      <div className={classes.SelectedPost}>
        <header>
          <strong>Selected Post:</strong>
        </header>
        <p>
          <strong>Title: </strong>
          {this.state.title}
        </p>
        <p>
          <strong>Body: </strong>
          {this.state.body}
        </p>
        <button onClick={this.deleteHandler}>DELETE</button>
      </div>
    );
  }
}

export default SelectedPost;
