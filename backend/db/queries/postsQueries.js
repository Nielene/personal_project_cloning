const { db } = require('../index.js');

// Postman: http://localhost:3000/posts
const getAllPosts = (req, res, next) => {
  db.any(
'SELECT users.*, subreddits.*, posts.*, COUNT(comments.id) FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id GROUP BY users.id, subreddits.id, posts.id ORDER BY posts.post_votes DESC'
// 'SELECT users.*, subreddits.*, posts.* FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id ORDER BY posts.id DESC'
// 'SELECT posts.*, subreddits.my_subreddit_title FROM posts JOIN subreddits ON posts.subreddit_id = subreddits.id'
// SELECT users.*, comments.*, posts.*  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id
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
  db.one('SELECT * FROM posts JOIN users ON users.id = posts.user_id WHERE posts.id=$1', [postId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You got your Post.@@@@@@@',
      body: data
    })
  }).catch(err => next(err))
}

// http://localhost:3000/posts/user/1
const getAllPostsBySingleUser = (req, res, next) => {
  let userId = parseInt(req.params.user_id);
  db.any(
    // "SELECT users.*, posts.* FROM posts JOIN users ON posts.user_id = users.id WHERE user_id =$1", [userId])
    'SELECT users.*, subreddits.*, posts.* FROM subreddits JOIN users ON subreddits.id = users.subreddit_id JOIN posts ON users.id = posts.user_id WHERE posts.user_id =$1', [userId])

  .then(data => {
    res.status(200).json({
      status: 'success',
      user_posts: data,
      message: 'ALL POSTS BY THIS USER!'
    })
  })
  .catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: 'YOU ARE NOT GETTING ALL POSTS FOR THIS USER!'
    })
     console.log(err);
    next();
  });
}

// SELECT users.*, comments.*, posts.*  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id

/*SELECT t1.col, t3.col FROM table1 JOIN table2 ON table1.primarykey = table2.foreignkey
                                  JOIN table3 ON table2.primarykey = table3.foreignkey*/

const createNewPostInSingleSubreddit = (req, res, next) => {

  let queryString = "INSERT INTO posts ";

  if (req.body.post_body) {
    queryString +=   "(post_body, post_title, post_type, post_time, post_votes, subreddit_id, user_id, image_url) VALUES(${post_body}, ${post_title}, ${post_type}, ${post_time}, ${post_votes}, ${subreddit_id}, ${user_id}, ${image_url} )"
  } else if (req.body.image_url) {
    queryString +=   "(image_url, post_title, post_type, post_time, post_votes, subreddit_id, user_id) VALUES(${image_url}, ${post_title}, ${post_type}, ${post_time}, ${post_votes}, ${subreddit_id}, ${user_id} )"
  }

  db.none(queryString, {
    ...req.body,
    user_id: req.user.id // if user is loogged in , you alwyas have req.user - which contains the user. i copied this from isLoggedIn (usersQueries) line 47.
  })

  // db.none("INSERT INTO posts(post_title, post_body, image_url, post_type, post_time, subreddit_id, user_id) VALUES( ${post_title}, ${post_body}, ${image_url}, ${post_type}, ${subreddit_id}, ${user_id} )", {
  //   ...req.body,
  //   user_id: req.user.id // if user is loogged in , you alwyas have req.user - which contains the user. i copied this from isLoggedIn (usersQueries) line 47.
  // })
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

module.exports = { getAllPosts, getSinglePost, getAllPostsBySingleUser, createNewPostInSingleSubreddit, deleteOwnPost }


//---------------------------------------------


// const createNewPostInSingleSubreddit = (req, res, next) => {

  // // let queryString = "INSERT INTO posts ";
  // //
  // // if (req.body.image_url) {
  // //   queryString +=   "(image_url, post_title, post_type, subreddit_id, user_id) VALUES(${image_url}, ${post_title}, ${post_type}, ${subreddit_id}, ${user_id} )"
  // // } else if (req.body.post_body) {
  // //   queryString +=   "(post_body, post_title, post_type, subreddit_id, user_id) VALUES(${post_body}, ${post_title}, ${post_type}, ${subreddit_id}, ${user_id} )"
  // // }
  // //
  // // db.none(queryString, {
  // //   ...req.body,
  // //   user_id: req.user.id // if user is loogged in , you alwyas have req.user - which contains the user. i copied this from isLoggedIn (usersQueries) line 47.
  // // })
  //
  //
  // // db.none("INSERT INTO posts(post_title, post_body, image_url, my_subreddit_title ) VALUES( ${post_title}, ${post_body}, ${image_url}, ${my_subreddit_title} )",
  // //   req.body)
  //
  //
  // db.none("INSERT INTO posts(post_title, post_body, image_url, post_type, subreddit_id, user_id) VALUES( ${post_title}, ${post_body}, ${image_url}, ${post_type}, ${subreddit_id}, ${user_id} )", {
  //   ...req.body,
  //   user_id: req.user.id // if user is loogged in , you alwyas have req.user - which contains the user. i copied this from isLoggedIn (usersQueries) line 47.
  // })


//---------------------------------------------
// localhost:3000/posts/  GIVES ME THIS:
// {
//     "status": "success",
//     "posts": [
//         {
//             "id": 1,
//             "username": "Adrian_Emard71",
//             "karma_points": 885,
//             "subreddit_id": 6,
//             "my_subreddit_title": "CONFUSING_PERSPECTIVE",
//             "post_title": "Omnis consequatur voluptatum dolor architecto non.",
//             "post_body": "Occaecati beatae possimus. Fugit accusamus ratione rerum possimus occaecati officia aperiam tempore. Rerum harum quis nobis quo praesentium rerum vero ab. Atque aperiam modi et aperiam sed dignissimos nostrum. Enim sed eius libero voluptas ut. Quo quo molestiae quos id.",
//             "image_url": "http://lorempixel.com/640/480/city",
//             "user_id": 42
//         },
//---------------------------------------------



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
//      console.log(err);
//     next();
//   });
// }
