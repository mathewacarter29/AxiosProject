import React, { Component } from "react";
import SelectedPost from "../../components/SelectedPost/SelectedPost";
import axios from "axios";
import classes from "./Layout.module.css";
import Post from "../../components/Post/Post";
import NewPost from "../../components/NewPost/NewPost";

class Layout extends Component {
  state = {
    selectedId: 0,
    posts: [],
    selectedPostTitle: "No post selected yet",
    selectedPostBody: "No post selected yet"
  };

  //Get posts from "https://jsonplaceholder.typicode.com/posts"
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      const data = response.data;
      this.setState({ posts: data });
    });
  }

  selectedPostHandler = id => {
    if (this.state.selectedId !== id) {
      this.setState({ selectedId: id });
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.selectedId !== prevState.selectedId) {
      axios
        .get(
          "https://jsonplaceholder.typicode.com/posts/" + this.state.selectedId
        )
        .then(response => {
          const data = response.data;
          this.setState({
            selectedPostTitle: data.title,
            selectedPostBody: data.body
          });
        });
    }
  }

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
            title={this.state.selectedPostTitle}
            body={this.state.selectedPostBody}
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
