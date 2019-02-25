import React from "react";
import PostsDisplayContainer from "./PostsDisplayContainer";

import { Route } from "react-router-dom";
import "../../css/Posts.css";

class Posts extends React.Component {
  componentDidMount() {
    console.log("props ", this.props)
    this.props.fetchPosts();
  }

  updatePost = e => {
    this.props.history.push("/posts/" + e.target.value);
  };

  render() {
    console.log('this.props.posts', this.props.posts)
    if (this.props.posts) {
      let posts = Object.values(this.props.posts).map(post => {
        return (
          <div>
            <li key={post.id} value={post.id}>
              <h1> post title </h1>
            </li>
          </div>
        );
      });
      return (
        <div className="posts">
          <ul onChange={this.updatePost} value={this.props.selectedId}>
            {posts}
          </ul>
          <Route path="/posts/:id" component={PostsDisplayContainer} />
        </div>
      );
    } else {
      return (
        <div>loading posts</div>
      )
    }
  }
}

export default Posts;

// {post.title}
