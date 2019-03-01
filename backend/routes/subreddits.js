let express = require('express');
let router = express.Router();
const { getAllPostsfromSingleSubreddit } = require('../db/queries/subredditsQueries');


router.get('/:subreddit_id', getAllPostsfromSingleSubreddit );

module.exports = router;
