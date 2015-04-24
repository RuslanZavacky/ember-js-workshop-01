import DS from 'ember-data';
import Configuration from '../config/environment';

export default DS.RESTAdapter.extend({
  host: Configuration.API.host,
  namespace: Configuration.API.namespace
});
