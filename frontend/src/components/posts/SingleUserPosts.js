import React, { Component } from "react";
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

    return (
      <div>

      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleUserPosts);
