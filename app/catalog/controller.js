import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  holdingCart: Ember.computed.alias('controllers.application.holdingCart'),

  actions: {
    addToCart: function (item) {
      this.target.send('addToCart', item);
    }
  }
});
