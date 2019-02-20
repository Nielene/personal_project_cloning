let express = require('express');
let router = express.Router();
const { getAllPosts, getAllPostsfromSingleSubreddit, createNewPostInSingleSubreddit, deleteOwnPost } = require('../db/queries/postsQueries');

// const db = require('../db/postsQueries');
// router.get('/', db.getAllPosts);

//getSomeRandomPosts
// router.post('/submit?selftext=true')

router.get('/', getAllPosts );
router.get('/:subreddit_title/posts', getAllPostsfromSingleSubreddit );
router.post('/', createNewPostInSingleSubreddit);
router.delete('/:post_id', deleteOwnPost);

module.exports = router;
