let express = require('express');
let router = express.Router();
const db = require('../db/queries/usersQueries');


router.get('/', db.getAllUsers );     // http://localhost:3000/users
router.delete('/:id', db.deleteSingleUser);   // DELETE   http://localhost:3000/users/1

router.get('/:user_id', db.getSingleUser);

module.exports = router;






// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
