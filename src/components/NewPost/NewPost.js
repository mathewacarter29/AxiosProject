import React from "react";
import classes from "./NewPost.module.css";

const newPost = () => {
  return (
    <div className={classes.NewPost}>
      <header>
        <strong>Create Post</strong>
      </header>
      <p>
        <strong>Title :</strong>
      </p>
      <input></input>
      <p>
        <strong>Body: </strong>
      </p>
      <input></input>
      <button>POST</button>
    </div>
  );
};

export default newPost;
