import React from "react";
import classes from "./Post.module.css";

const post = props => {
  return (
    <div className={classes.Post} onClick={props.clicked}>
      <header>
        <strong>Title:</strong> {props.title}
      </header>
      <p>
        <strong>Body:</strong> {props.body}
      </p>
    </div>
  );
};

export default post;
