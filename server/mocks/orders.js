module.exports = function(app) {
  var express = require('express');
  var orderRouter = express.Router();
  var orderProductRouter = express.Router();
  var order = {
    'order/products': []
  };
  var lastId = 1;

  orderRouter.get('/', function(req, res) {
    res.send(order);
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
    var params = req.body;
    var orderProduct = params['order/product'];

    orderProduct.id = lastId++;
    order['order/products'].push(orderProduct);

    res.status(200).json(order).end();
  });

  orderProductRouter.put('/', function(req, res) {
    var params = req.body;
    var orderProduct = params['order/product'];

    var item = order['order/products'].filter(function(product) {
      return product.code == orderProduct.code;
    });

    item[0].quantity += 1;

    res.status(200).json(order).end();
  });

  orderProductRouter.delete('/', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/orders', orderRouter);
  app.use('/api/orders/products', orderProductRouter);
};
