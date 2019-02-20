import { PostsDisplay } from "./PostsDisplay";
import { connect } from "react-redux";

import { fetchPosts } from "../../actions/PostsActions";


const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsDisplay);



// export default connect(
//   mapStateToProps,
//   null
// )(PostsDisplay);
