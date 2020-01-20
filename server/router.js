const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/')
  .get(controllers.get)
  .post(controllers.post)

router
  .route('/:_id')
  .put(controllers.put)
  .delete(controllers.delete)

module.exports = router;