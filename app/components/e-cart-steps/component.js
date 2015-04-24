import Ember from 'ember';

export default Ember.Component.extend({
  step: 'cart',

  isCart: Ember.computed.equal('step', 'cart'),
  isCheckout: Ember.computed.equal('step', 'checkout'),
  isConfirmation: Ember.computed.equal('step', 'confirmation')
});
