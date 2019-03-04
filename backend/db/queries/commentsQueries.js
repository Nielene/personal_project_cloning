const { db } = require('../index.js');


// router.get('/:post_id', getAllCommentsForSinglePost );
// Postman: http://localhost:3000/comments/2
const getAllCommentsForSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.post_id);
  db.any(
    "SELECT posts.*, comments.* FROM comments JOIN posts ON comments.post_id = posts.id WHERE post_id =$1", [postId])
  .then(data => {
    res.status(200).json({
      status: 'success',
      post_comments: data,
      message: 'ALL COMMENTS FOR THIS POST!'
    })
  })
  .catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: 'YOU ARE NOT GETTING ALL COMMENTS FOR THIS POST!'
    })
    console.log(err);
    next();
  });
}

// POST http://localhost:3000/comments/
// router.post('/', createCommentForSinglePost);
// WANT TO USER POST_ID AS A PARAMS ??????
const createCommentForSinglePost = (req, res, next) => {

  let queryString = "INSERT INTO comments ";

  if (req.body.post_id) {
    queryString +=   "(post_id, comment_body) VALUES(${post_id}, ${comment_body} )"
  } else if (req.body.user_id && req.body.post_id) {
    queryString +=   "(user_id, post_id, comment_body) VALUES(${user_id}, ${post_id}, ${comment_body} )"
  }

  db.none(queryString, req.body)
  // db.none("INSERT INTO posts(post_title, post_body, image_url, my_subreddit_title ) VALUES( ${post_title}, ${post_body}, ${image_url}, ${my_subreddit_title} )",
  //   req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'NEW COMMENT CREATED FOR THIS POST!',
      body: req.body,
    })
  })
  .catch(err => next(err));
}



  // const createNewPostInSingleSubreddit = (req, res, next) => {
  //
  //   let queryString = "INSERT INTO posts ";
  //
  //   if (req.body.image_url) {
  //     queryString +=   "(image_url, post_title, my_subreddit_title) VALUES(${image_url}, ${post_title}, ${my_subreddit_title} )"
  //   } else if (req.body.post_body) {
  //     queryString +=   "(post_body, post_title, my_subreddit_title) VALUES(${post_body}, ${post_title}, ${my_subreddit_title} )"
  //   }
  //
  //   db.none(queryString, req.body)
  //   // db.none("INSERT INTO posts(post_title, post_body, image_url, my_subreddit_title ) VALUES( ${post_title}, ${post_body}, ${image_url}, ${my_subreddit_title} )",
  //   //   req.body)
  //   .then(() => {
  //     res.status(200).json({
  //       status: 'success',
  //       message: 'NEW POST CREATED IN A SINGLE SUBREDDIT!',
  //       body: req.body,
  //     })
  //   })
  //   .catch(err => next(err));
  // }


// router.delete('/:comment_id', deleteComment);
const deleteComment = (req, res, next) => {
  let comment_id = parseInt(req.params.id);
  db.result('DELETE FROM comments WHERE comments.id =$1', [comment_id])
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'You DELETED this comment.'
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: 'You did NOT delete any Comment.'
    })
    console.log(err);
    next();
  })
}

module.exports = { getAllCommentsForSinglePost, createCommentForSinglePost, deleteComment }




// router.post('/:post_id', createCommentForSinglePost);



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
