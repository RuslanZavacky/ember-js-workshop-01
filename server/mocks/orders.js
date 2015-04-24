module.exports = function(app) {
  var express = require('express');
  var orderRouter = express.Router();
  var orderProductRouter = express.Router();
  var order = {
    products: []
  };

  orderRouter.get('/', function(req, res) {
    res.send({
      'order': []
    });
  });

  orderRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  orderRouter.put('/', function(req, res) {
    res.send({
      'order': {
        id: req.params.id
      }
    });
  });

  orderRouter.delete('/', function(req, res) {
    res.status(204).end();
  });

  orderProductRouter.get('/', function(req, res) {
    res.send({
      'order/product': []
    });
  });

  orderProductRouter.post('/', function(req, res) {
    console.log(req.body);

    res.status(201).end();
  });

  orderProductRouter.put('/', function(req, res) {
    res.send({
      'order/product': {
        id: req.params.id
      }
    });
  });

  orderProductRouter.delete('/', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/orders', orderRouter);
  app.use('/api/orders/products', orderProductRouter);
};
