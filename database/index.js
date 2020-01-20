var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!')
});

var grocerySchema = new mongoose.Schema({
  item: String,
  quantity: Number
});

var Grocery = mongoose.model('Grocery', grocerySchema);

// Grocery.create({
//   item: 'corn',
//   quantity: 6
// })

module.exports = Grocery;
