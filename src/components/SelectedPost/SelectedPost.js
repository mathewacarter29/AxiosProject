import React from "react";
import classes from "./SelectedPost.module.css";

const selectedPost = props => {
  return (
    <div className={classes.SelectedPost}>
      <header>
        <strong>Selected Post:</strong>
      </header>
      <p>
        <strong>Title: </strong>
        {props.title}
      </p>
      <p>
        <strong>Body: </strong>
        {props.body}
      </p>
    </div>
  );
};

export default selectedPost;
