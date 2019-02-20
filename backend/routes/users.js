let express = require('express');
let router = express.Router();
const db = require('../db/queries/usersQueries');

router.get('/', db.getAllUsers );
router.get('/', db.getSingleUser);
router.delete('/:id', db.deleteSingleUser);

module.exports = router;






// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
