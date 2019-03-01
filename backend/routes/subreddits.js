let express = require('express');
let router = express.Router();
const { getAllSubreddits, getAllPostsfromSingleSubreddit } = require('../db/queries/subredditsQueries');

router.get('/', getAllSubreddits );    // http://localhost:3000/posts/
router.get('/:subreddit_id', getAllPostsfromSingleSubreddit );

module.exports = router;
