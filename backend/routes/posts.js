let express = require('express');
let router = express.Router();
const { getAllPosts, getSinglePost, getAllPostsfromSingleSubreddit, createNewPostInSingleSubreddit, deleteOwnPost } = require('../db/queries/postsQueries');

// const db = require('../db/postsQueries');
// router.get('/', db.getAllPosts);

//getSomeRandomPosts
// router.post('/submit?selftext=true')

router.get('/', getAllPosts );    // http://localhost:3000/posts/

router.get('/:id', getSinglePost);    // http://localhost:3000/posts/1
router.delete('/:post_id', deleteOwnPost);

router.post('/', createNewPostInSingleSubreddit);

module.exports = router;
