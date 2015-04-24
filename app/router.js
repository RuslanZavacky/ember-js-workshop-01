import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function () {
  this.route('catalog', {path: '/'});
  this.route('cart');
  this.route('checkout');
  this.route('confirmation');
});
