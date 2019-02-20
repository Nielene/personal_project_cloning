import Posts from "./Posts";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/PostsActions";

// const mapStateToProps = (state, ownProps) => {
//   console.log('STATE', state)
//   return {
//     posts: state.posts,
//     selectedId: ownProps.match.params.id
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log('DISPATCH')
//   return {
//     fetchPosts: () => dispatch(fetchPosts())
//   };
// };

// export default connect(
  // mapStateToProps,
  // mapDispatchToProps
// )(Posts);


export default Posts
