const helpers = require('../database/helpers.js');

var controllers = {
  get: (req, res) => { 
    helpers.get().then((data) => {
      res.status(200).send(data);
    });
  },
  post:(req, res) => { 
    helpers.post(req.body).then(() => { 
      res.status(201).send('posted');
    });
  },
  put: (req, res) => { 
    helpers.put(req.params, req.body).then(() => {
      res.status(202).send('put'); 
    });
  },
  delete: (req, res) => { 
    console.log('req.params:',req.params)
    helpers.delete(req.params).then(() => {
      res.status(203).send('delete');
    });
  }
}

module.exports = controllers;