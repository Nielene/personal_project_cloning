const { db } = require('./index.js')
const faker = require('faker');

let subreddits = ['WHYWERETHEYFILMING', 'YESYESYESNO', 'YESYESYESYESNO', 'FUNNYANDSAD', 'HOLDMYCOSMO', 'CONFUSING_PERSPECTIVE']
let my_subreddit_title = subreddits[Math.floor(Math.random() * subreddits.length)];
let subredditsSql = [];
for (let i = 0; i < subreddits.length; i++) {
  subredditsSql.push( `('${subreddits[i]}')` )

}

let posts = [];
for (let i = 0; i < 100; i++) {
  let post_title = faker.lorem.sentence();
  let post_body = faker.lorem.sentences();
  let image_url = faker.image.imageUrl();
  // let subreddit_id =
  let subreddit_id = Math.floor(Math.random() * subredditsSql.length) + 1;
  let str = `('${post_title}', '${post_body}', '${image_url}', '${subreddit_id}' )`
  posts.push(str)
}

let users = [];
for (let i = 0; i < 50; i++) {
  let username = faker.internet.userName();
  let post_id = Math.floor(Math.random() * 100) + 1;
  let karma_points = Math.floor(Math.random() * 1000);
  let str = `( '${username}', ${post_id}, ${karma_points} )`
  users.push(str)
}

let comments = [];
for (let i = 0; i < 1000; i++) {
  let comment_body = faker.lorem.sentences();
  let post_id = Math.floor(Math.random() * 100) + 1;
  let user_id = Math.floor(Math.random() * 50) + 1;
  let str = "( '" + comment_body + "', " + post_id + ", " + user_id + " )"
  comments.push(str)
}

let up_down_votes = [];
for (let i = 0; i < 100; i++) {
  let initial_count = Math.floor(Math.random() * 1000) + 1;
  let vote_type;
    ( Boolean(Math.round(Math.random())) <= 0.5 ) ? type = 'up' : type = 'down';
  let post_id = Math.floor(Math.random() * 100) + 1;
  let str = `( ${initial_count}, '${vote_type}', ${post_id} )`
  up_down_votes.push(str)
}

subredditsSql = subredditsSql.join(', ')
posts = posts.join(', ')
users = users.join(', ')
comments = comments.join(', ')
up_down_votes = up_down_votes.join(', ')

db.none("INSERT INTO subreddits (my_subreddit_title) VALUES" + subredditsSql + ";")
.then(() => {
  db.none("INSERT INTO posts (post_title, post_body, image_url, subreddit_id) VALUES " + posts + ";")
  .then(() => {
    db.none("INSERT INTO users(username, post_id, karma_points) VALUES " + users + ";")
    .then(() => {
      db.none("INSERT INTO comments(comment_body, post_id, user_id) VALUES " + comments + ";")
    })
  })
})
.catch(err => {
  console.log(err);
})

// db.none("INSERT INTO up_down_votes (initial_count, vote_type, post_id) VALUES " + up_down_votes + ";")
// .catch(err => {
//   console.log(err);
// })

// db.none("INSERT INTO posts (post_title,post_body, image_url, date_created, votes) VALUES " + posts + ";")
// .then(() => {
//   db.none("INSERT INTO up_down_votes (initial_count, vote_type, post_id) VALUES " + up_down_votes + ";")
// })
// .catch(err => {
//   console.log(err);
// })
