const { db } = require('../index.js');


// router.get('/:post_id', getAllCommentsForSinglePost );
// Postman: http://localhost:3000/comments/1

// const getAllCommentsForSinglePost = (req, res, next) => {
//   let post_id = parseInt(req.params.id);
//   db.any(
//     'SELECT comments.*, posts.* FROM comments JOIN posts ON comments.post_id = posts.id WHERE posts.id =$1', [post_id]
//   )
//   .then(comments => {
//     res.status(200).json({
//       status: 'success',
//       comments: comments,
//       message: 'All Comments Received!'
//     })
//   })
//   .catch(err => next(err));
// }

// const getAllPostsfromSingleSubreddit = (req, res, next) => {
const getAllCommentsForSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.post_id);
  db.any(
    "SELECT posts.*, comments.* FROM comments JOIN posts ON comments.post_id = posts.id WHERE post_id =$1", [postId])
  .then(data => {
    res.status(200).json({
      status: 'success',
      post_comments: data,
      message: 'ALL POSTS FROM THIS SUBREDDIT!'
    })
  })
  .catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: 'YOU ARE NOT GETTING ALL POSTS FROM THIS SUBREDDIT!'
    })
    console.log(err);
    next();
  });
}


// router.post('/:post_id', createCommentForSinglePost);
// const createNewPostInSingleSubreddit = (req, res, next) => {
const createCommentForSinglePost = (req, res, next) => {

  let queryString = "INSERT INTO posts ";

  if (req.body.image_url) {
    queryString +=   "(image_url, post_title, my_subreddit_title) VALUES(${image_url}, ${post_title}, ${my_subreddit_title} )"
  } else if (req.body.post_body) {
    queryString +=   "(post_body, post_title, my_subreddit_title) VALUES(${post_body}, ${post_title}, ${my_subreddit_title} )"
  }

  db.none(queryString, req.body)
  // db.none("INSERT INTO posts(post_title, post_body, image_url, my_subreddit_title ) VALUES( ${post_title}, ${post_body}, ${image_url}, ${my_subreddit_title} )",
  //   req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'NEW POST CREATED IN A SINGLE SUBREDDIT!',
      body: req.body,
    })
  })
  .catch(err => next(err));
}


// router.delete('/:comment_id', deleteComment);
const deleteComment = (req, res, next) => {
  let post_id = parseInt(req.params.id);
  db.result('DELETE FROM posts WHERE posts.id =$1', [post_id])
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'You DELETED this post.'
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: 'You did NOT delete any Post.'
    })
    console.log(err);
    next();
  })
}

module.exports = { getAllCommentsForSinglePost, createCommentForSinglePost, deleteComment }


// // http://localhost:3000/posts/1
// const getSinglePost = (req, res, next) => {
//   let postId = parseInt(req.params.id);
//   db.one('SELECT * FROM posts WHERE id=$1', [postId])
//   .then(data => {
//     res.status(200)
//     .json({
//       status: 'success',
//       message: 'You got your Post.@@@@@@@',
//       body: data
//     })
//   }).catch(err => next(err))
// }
