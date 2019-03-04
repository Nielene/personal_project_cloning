let express = require('express');
let router = express.Router();
const { getAllCommentsForSinglePost, createCommentForSinglePost, deleteComment } = require('../db/queries/commentsQueries');

// const db = require('../db/postsQueries');
// router.get('/', db.getAllComments);

//getSomeRandomComments
// router.post('/submit?selftext=true')

router.get('/:post_id', getAllCommentsForSinglePost );    // http://localhost:3000/posts/

// router.get('/:id', getSinglePost);    // http://localhost:3000/posts/1
router.delete('/:comment_id', deleteComment);

router.post('/:post_id', createCommentForSinglePost);

module.exports = router;
