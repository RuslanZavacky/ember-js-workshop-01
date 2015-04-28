import Ember from 'ember';

export default Ember.Route.extend({
  onAddToCartSuccess: function () {
    console.log('success');
    this.controllerFor('application').set('holdingCart', false);
  },

  onAddToCartFail: function () {
    console.log('fail');
    this.controllerFor('application').set('holdingCart', false);
  },

  actions: {
    addToCart: function (item) {
      var me = this;
      console.log('addToCart', item);

      me.controllerFor('application').set('holdingCart', true);

      me.store
        .find('order/product', item.get('id'))
        .then(function(orderProduct) {
          console.log('found order product', orderProduct);
          return orderProduct;
        })
        .catch(function () {
          console.log('can create new', item.get('id'));
          me.store.recordForId('order/product', item.get('id')).unloadRecord();

          return me.store.createRecord('order/product', {
            code: item.get('code'),
            title: item.get('title'),
            rating: item.get('rating'),
            price: item.get('price'),
            url: item.get('url'),
            heart: item.get('heart'),
            description: item.get('description')
          });
        })
        .then(function (orderProduct) {
          console.log('found or created', orderProduct);

          orderProduct
            .save()
            .then(me.onAddToCartSuccess.bind(me))
            .catch(me.onAddToCartFail.bind(me));
        });
    }
  }
});
