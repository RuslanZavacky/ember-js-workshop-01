import Ember from 'ember';

export default Ember.Component.extend({
  stars: 0,

  isOne: Ember.computed.gte('stars', 1),
  isTwo: Ember.computed.gte('stars', 2),
  isThree: Ember.computed.gte('stars', 3),
  isFour: Ember.computed.gte('stars', 4),
  isFive: Ember.computed.gte('stars', 5)
});
