const { db } = require('../index.js');

const getAllUsers = (req, res, next) => {
  db.any(
    'SELECT * FROM users'
  )
  .then(data => {
    res.status(200).json({
      status: 'success',
      users: data,
      message: 'All Users Received!'
    })
  })
  .catch(err => next(err));
}


const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE id=$1', [userId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You got your Users.',
      body: data
    })
  }).catch(err => next(err))
}


const deleteSingleUser = ( req, res, next ) => {
  let user_id = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE users.id =$1', [user_id])
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'You DELETED this user.'
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: 'You did NOT delete this User.'
    })
    console.log(err);
    next();
  })
}


module.exports = { getAllUsers, getSingleUser, deleteSingleUser };
// module.exports = { getAllUsers, getSingleUser, getAllPostsBySingleUser, deleteSingleUser };
