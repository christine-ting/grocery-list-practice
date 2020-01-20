const Grocery = require('./index.js');

const helpers = {
  get: () => Grocery.find({}),
  post: (newGrocery) => Grocery.create(newGrocery),
  put: (_id, newQty) => Grocery.findOneAndUpdate(_id, newQty),
  delete: (_id) => Grocery.findOneAndDelete(_id)
}

module.exports = helpers;