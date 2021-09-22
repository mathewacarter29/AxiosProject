import React, { Component } from "react";
import classes from "./NewPost.module.css";
import axios from "axios";

class NewPost extends Component {
  state = {
    title: "",
    body: ""
  };

  //Post data to https://jsonplaceholder.typicode.com/posts/
  //Since this is a dummy backend, it won't actually store data, so we just console.log the response
  //  to see that it was successful
  postButtonHandler = () => {
    const newPost = {
      title: this.state.title,
      body: this.state.body
    };
    axios.post("/posts", newPost).then(response => {
      console.log(response);
    });
    this.setState({ title: "", body: "" });
  };

  changeTitleHandler = event => {
    this.setState({ title: event.target.value });
  };

  changeBodyHandler = event => {
    this.setState({ body: event.target.value });
  };

  render() {
    return (
      <div className={classes.NewPost}>
        <header>
          <strong>Create Post</strong>
        </header>
        <p>
          <strong>Title :</strong>
        </p>
        <input
          type="text"
          value={this.state.title}
          onChange={this.changeTitleHandler}
        ></input>
        <p>
          <strong>Body: </strong>
        </p>
        <input
          value={this.state.body}
          onChange={this.changeBodyHandler}
        ></input>
        <button onClick={this.postButtonHandler}>POST</button>
      </div>
    );
  }
}

export default NewPost;
