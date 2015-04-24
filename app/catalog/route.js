import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('product');
  },

  onAddToCartSuccess: function() {
    console.log('success');
  },

  onAddToCartFail: function() {
    console.log('fail');
  },

  actions: {
    addToCart: function(item) {
      console.log('addToCart', item);

      var orderProduct = this.store.createRecord('order/product', {
        title: item.get('title'),
        rating: item.get('rating'),
        price: item.get('price'),
        url: item.get('url'),
        heart: item.get('heart'),
        description: item.get('description')
      });

      orderProduct
        .save()
        .then(this.onAddToCartSuccess.bind(this))
        .catch(this.onAddToCartFail.bind(this));
    }
  }
});
