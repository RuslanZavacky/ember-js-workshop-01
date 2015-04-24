import Ember from 'ember';
import ApplicationAdapter from '../../application/adapter';

export default ApplicationAdapter.extend({
  buildURL: function() {
    return this._super() + '/orders/products';
  }
});
