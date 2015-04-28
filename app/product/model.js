import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  title: DS.attr('string'),
  rating: DS.attr('number'),
  price: DS.attr('number'),
  url: DS.attr('string'),
  heart: DS.attr('boolean'),
  description: DS.attr('string')
});
