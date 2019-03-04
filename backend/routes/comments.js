let express = require('express');
let router = express.Router();
const { getAllCommentsForSinglePost, createCommentForSinglePost, deleteComment } = require('../db/queries/commentsQueries');

// const db = require('../db/postsQueries');
// router.get('/', db.getAllComments);

//getSomeRandomComments
// router.post('/submit?selftext=true')

router.get('/:post_id', getAllCommentsForSinglePost );    // http://localhost:3000/posts/

router.post('/', createCommentForSinglePost);  // POST http://localhost:3000/comments/
// router.post('/:post_id', createCommentForSinglePost);
router.delete('/:comment_id', deleteComment);


module.exports = router;
