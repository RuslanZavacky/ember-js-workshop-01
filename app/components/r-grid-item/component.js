import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['column', 'r-grid-item'],
  item: null,
  i: 0,

  actions: {
    addToCart: function () {
      this.sendAction('addToCart', this.get('item'));
    }
  }
});
