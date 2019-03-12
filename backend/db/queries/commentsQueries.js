const { db } = require('../index.js');


// router.get('/:post_id', getAllCommentsForSinglePost );
// Postman: http://localhost:3000/comments/2
const getAllCommentsForSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.post_id);
  db.any(
    "SELECT users.*, subreddits.*, posts.*, comments.*, COUNT(comments.id) FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id WHERE posts.id= $1 GROUP BY users.id, subreddits.id, posts.id, comments.id  ORDER BY posts.post_votes DESC", [postId])
    // "SELECT users.*, subreddits.*, posts.* , comments.*, COUNT(comments.id) FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id WHERE posts.id= 1 GROUP BY users.id, subreddits.id, posts.id, comments.id", [postId])
    // "SELECT users.*, comments.*, posts.*, COUNT(comments.id)  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id WHERE posts.id =$1 GROUP BY users.id, comments.id, posts.id", [postId])
    // "SELECT users.*, comments.*, posts.*  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id WHERE posts.id =$1", [postId])
    // "SELECT posts.*, comments.* FROM comments JOIN posts ON comments.post_id = posts.id WHERE post_id =$1", [postId])

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

// router.get('/user/:user_id', getAllCommentsBySingleUser)
// http://localhost:3000/comments/user/1
const getAllCommentsBySingleUser = (req, res, next) => {
  let userId = parseInt(req.params.user_id);
  db.any(
    // "SELECT users.*, comments.* FROM comments JOIN users ON comments.user_id = users.id WHERE user_id =$1", [userId])
    // "SELECT users.*, comments.* FROM comments JOIN users ON comments.user_id = users.id WHERE user_id =$1", [userId])
    // "SELECT users.*, comments.*, posts.*  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id WHERE comments.user_id =$1", [userId])
    "SELECT users.*, comments.*, posts.*  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id WHERE users.id =$1", [userId])

  .then(data => {
    res.status(200).json({
      status: 'success',
      user_comments: data,
      message: 'ALL COMMENTS BY THIS USER!'
    })
  })
  .catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: 'YOU ARE NOT GETTING ALL COMMENTS FOR THIS USER!'
    })
     console.log(err);
    next();
  });
}

// POST http://localhost:3000/comments/
// router.post('/', createCommentForSinglePost);
// WANT TO USER POST_ID AS A PARAMS ??????
const createCommentForSinglePost = (req, res, next) => {

  // let queryString = "INSERT INTO comments ";
  //
  // if (req.body.post_id) {
  //   queryString +=   "(post_id, comment_body) VALUES(${post_id}, ${comment_body} )"
  // } else if (req.body.user_id && req.body.post_id) {
  //   queryString +=   "(user_id, post_id, comment_body) VALUES(${user_id}, ${post_id}, ${comment_body} )"
  // }
  // db.none(queryString, req.body)

  db.none("INSERT INTO comments(user_id, post_id, comment_body ) VALUES( ${user_id}, ${post_id}, ${comment_body} )", {
    ...req.body,
    user_id: req.user.id,
  })
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'NEW COMMENT CREATED FOR THIS POST!',
      body: req.body,
    })
  })
  .catch(err => next(err));
}

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

module.exports = { getAllCommentsForSinglePost, getAllCommentsBySingleUser, createCommentForSinglePost, deleteComment }

//-------------------------------------------
// comments/user/3 GIVES ME:
//  "user_comments": [
        // {
        //     "id": 49,
        //     "username": "Ottis10",
        //     "karma_points": 494,
        //     "subreddit_id": 1,
        //     "comment_body": "Non voluptas minus iusto est qui sed eum velit. Inventore minus nesciunt et quasi libero.",
        //     "post_id": 49,
        //     "user_id": 3,
        //     "post_title": "Et ut doloribus quis eligendi nobis cupiditate error itaque.",
        //     "post_body": "Qui eius nesciunt totam quae architecto dolore. Velit sint a architecto sit deserunt saepe sit sint. Voluptatem facere labore aut eos labore nihil. Quibusdam odit dicta est qui asperiores harum quam. Numquam ex dolorum est voluptas ratione.",
        //     "image_url": "http://lorempixel.com/640/480/fashion"
        // },

//-------------------------------------------


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
