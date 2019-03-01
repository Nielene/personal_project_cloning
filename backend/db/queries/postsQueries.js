const { db } = require('../index.js');

// Postman: http://localhost:3000/posts
const getAllPosts = (req, res, next) => {
  db.any(
    'SELECT posts.*, subreddits.my_subreddit_title FROM posts JOIN subreddits ON posts.subreddit_id = subreddits.id'
  )
  .then(posts => {
    res.status(200).json({
      status: 'success',
      posts: posts,
      message: 'All Posts Received!'
    })
  })
  .catch(err => next(err));
}

// http://localhost:3000/posts/1
const getSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one('SELECT * FROM posts WHERE id=$1', [postId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You got your Post.@@@@@@@',
      body: data
    })
  }).catch(err => next(err))
}

const createNewPostInSingleSubreddit = (req, res, next) => {

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


const deleteOwnPost = (req, res, next) => {
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

module.exports = { getAllPosts, getSinglePost, createNewPostInSingleSubreddit, deleteOwnPost }

// , getAllPostsfromSingleSubreddit


// const getAllPostsfromSingleSubreddit = (req, res, next) => {
//   let subredditId = parseInt(req.params.id);
//   db.any(
//     "SELECT posts.*, subreddits.* FROM posts JOIN subreddits ON posts.subreddit_id = subreddits.id WHERE subreddit_id =${id}", {
//       id: subredditId
//     }
//   )
//   .then(data => {
//     res.status(200).json({
//       status: 'success',
//       posts: data,
//       message: 'ALL POSTS FROM THIS SUBREDDIT!'
//     })
//   })
//   .catch(err => {
//     res.status(400)
//     .json({
//       status: 'error',
//       message: 'YOU ARE NOT GETTING ALL POSTS FROM THIS SUBREDDIT!'
//     })
//     console.log(err);
//     next();
//   });
// }
