import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserPosts } from "../../actions/postActions";
import "../../css/posts/SingleUserPosts.css";

const mapStateToProps = state => ({
  userPosts: state.posts.userPosts
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPosts: id => dispatch(fetchUserPosts(id))
  };
};

class SingleUserPosts extends Component {
  componentDidMount() {
    this.props.fetchUserPosts(this.props.match.params.user_id);
  }

  render() {

    const postItems = this.props.userPosts.map(post => (
      <div key={post.id} className="eachPostItemDiv">
        <div className="postTitle">
          <Link to={"/post/" + post.id}>
            {" "}
            <p>{post.post_title}</p>{" "}
          </Link>
          <h6>
            by <Link to="">**USERNAME**</Link> in{" "}
            <Link to={"/subredditPosts/" + post.subreddit_id}>
              {post.my_subreddit_title}
            </Link>{" "}
          </h6>
        </div>

        <div className="postItemBody">
          <h6>
            <Link to="">**USERNAME**</Link>{" "}
            <h3>{Math.floor(Math.random() * 10000)}</h3> point{" "}
            {Math.floor(Math.random() * 24)} hours ago{" "}
          </h6>
          <p> **USER S COMMENT TO THIS POST**</p>
        </div>
      </div>
    ));

    return <div>{postItems}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleUserPosts);

// const postItems = this.props.userPosts.map(post => (
//   <div key={post.id} className="eachPostItemDiv">
//     <div className="postTitle">
//       <Link to={"/post/" + post.id}>
//         {" "}
//         <p>{post.post_title}</p>{" "}
//       </Link>
//       <h6>
//         by <Link to="">**USERNAME**</Link> in{" "}
//         <Link to={"/subredditPosts/" + post.subreddit_id}>
//           {post.my_subreddit_title}
//         </Link>{" "}
//       </h6>
//     </div>
//
//     <div className="postItemBody">
//       <h6>
//         <Link to="">**USERNAME**</Link>{" "}
//         <h3>{Math.floor(Math.random() * 10000)}</h3> point{" "}
//         {Math.floor(Math.random() * 24)} hours ago{" "}
//       </h6>
//       <p> **USER S COMMENT TO THIS POST**</p>
//     </div>
//   </div>
// ));

//

// "user_posts": [
//         {
//             "id": 77,
//             "username": "Quinton.OHara77",
//             "karma_points": 256,
//             "post_title": "Sunt aliquid consequatur aspernatur vel adipisci nihil perspiciatis.",
//             "post_body": "Doloremque dolores cumque sit et. Sit ea et et quasi at ea autem. Iure culpa vel velit et sed accusantium voluptas. Ea eos facere consequatur rem. Corporis cupiditate similique est velit ipsam dolorem. Eum tempora pariatur.",
//             "image_url": "http://lorempixel.com/640/480/abstract",
//             "subreddit_id": 4,
//             "user_id": 2
//         }
//     ],
