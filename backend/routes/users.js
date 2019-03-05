let express = require('express');
let router = express.Router();
const db = require('../db/queries/usersQueries');


router.get('/', db.getAllUsers );
router.delete('/:id', db.deleteSingleUser);

router.get('/:user_id', db.getSingleUser);
// router.get('/allPosts/:user_id', db.getAllPostsBySingleUser);

module.exports = router;






// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
