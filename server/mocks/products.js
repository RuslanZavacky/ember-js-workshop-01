module.exports = function (app) {
  var express = require('express');
  var productRouter = express.Router();

  productRouter.get('/', function (req, res) {
    res.send({
      'product': [
        {
          id: 1,
          code: 'RZ-0000-01',
          title: 'Zeiss HD5 Conquest 5-25X50 Rifle Scope',
          rating: 5,
          price: 1029.95,
          url: 'zeiss-hd5-conquest-5-25x50-rifle-scope',
          heart: true,
          description: 'Zeiss HD5 Conquest 5-25X50 Rifle Scopes are the most compact high-magnification riflescopes in the industry and the most powerful in the HD5 line.'
        }, {
          id: 2,
          code: 'RZ-0000-02',
          title: 'Leupold Mark 6 3-18x44mm Rifle Scope',
          rating: 5,
          price: 2199.99,
          url: 'leupold-mark-6-3-18x44mm-rifle-scope',
          heart: false,
          description: 'For excellent precision and a high performing scope, look to the Leupold Mark VI 3-18x44mm Rifle Scope. With a length of just under 12 inches, this optic sets the standard for high-end riflescopes and is 20% shorter and 20% lighter.'
        }
      ]
    });
  });

  productRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  productRouter.get('/:id', function (req, res) {
    res.send({
      'product': {
        id: req.params.id
      }
    });
  });

  productRouter.put('/:id', function (req, res) {
    res.send({
      'product': {
        id: req.params.id
      }
    });
  });

  productRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  app.use('/api/products', productRouter);
};
