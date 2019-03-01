let express = require('express');
let router = express.Router();
const { getAllSubreddits, getAllPostsfromSingleSubreddit } = require('../db/queries/subredditsQueries');

router.get('/', getAllSubreddits );    // http://localhost:3000/subreddits
router.get('/:subreddit_id', getAllPostsfromSingleSubreddit );    //Postman: http://localhost:3000/subreddits/4

module.exports = router;
