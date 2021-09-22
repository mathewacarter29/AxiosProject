import React, { Component } from "react";
import SelectedPost from "../../components/SelectedPost/SelectedPost";
import axios from "axios";
import classes from "./Layout.module.css";
import Post from "../../components/Post/Post";
import NewPost from "../../components/NewPost/NewPost";

class Layout extends Component {
  state = {
    selectedId: 0,
    posts: []
  };

  //Get posts from "https://jsonplaceholder.typicode.com/posts"
  componentDidMount() {
    axios.get("/posts").then(response => {
      const data = response.data;
      this.setState({ posts: data });
    });
  }

  selectedPostHandler = id => {
    if (this.state.selectedId !== id) {
      this.setState({ selectedId: id });
    }
  };

  resetSelected = () => {
    this.setState({ selectedId: 0 });
  };

  render() {
    const arr = this.state.posts.map(element => {
      return (
        <Post
          clicked={() => this.selectedPostHandler(element.id)}
          key={element.id}
          title={element.title}
          body={element.body}
        ></Post>
      );
    });
    return (
      <div>
        <section className={classes.Posts}>{arr}</section>
        <section>
          <SelectedPost
            resetId={this.resetSelected}
            id={this.state.selectedId}
          ></SelectedPost>
        </section>
        <section>
          <NewPost></NewPost>
        </section>
      </div>
    );
  }
}

export default Layout;
