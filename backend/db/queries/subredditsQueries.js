const { db } = require('../index.js');

const getAllSubreddits = (req, res, next) => {
  db.any(
    'SELECT * FROM subreddits'
  )
  .then(data => {
    res.status(200).json({
      status: 'success',
      subreddits: data,
      message: 'All Subreddits Received!'
    })
  })
  .catch(err => next(err));
}

//Postman: http://localhost:3000/subreddits/4
const getAllPostsfromSingleSubreddit = (req, res, next) => {
  let subredditId = parseInt(req.params.subreddit_id);
  db.any(
    "SELECT subreddits.*, posts.* FROM posts JOIN subreddits ON posts.subreddit_id = subreddits.id WHERE subreddit_id =$1", [subredditId])
  .then(data => {
    res.status(200).json({
      status: 'success',
      subreddit_posts: data,
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



module.exports = { getAllSubreddits, getAllPostsfromSingleSubreddit }

// , createNewPostInSingleSubreddit

// SCRAP:
// Postman: http://localhost:3000/subreddits/yesyesyesno
// "SELECT subreddits.*, posts.* FROM subreddits JOIN posts ON subreddits.id=posts.subreddit_id WHERE subreddit_id =${id}", {
// "SELECT * FROM subredditPosts WHERE subreddit_id = ${id}", {
// "SELECT subredditPosts.*, subreddits.* FROM subredditPosts JOIN subreddits ON subredditPosts.subreddit_id = subreddits.id WHERE subreddit_id =${id}", {
//   subreddit_id: subredditId
// }
// "SELECT subredditPosts.*, subreddits.* FROM subredditPosts JOIN subreddits ON subredditPosts.subreddit_id = subreddits.id WHERE subreddit_id =$1", [subredditId])
// END SCRAP.
