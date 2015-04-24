import DS from 'ember-data';
import Product from '../../product/model';

export default Product.extend({
  quantity: DS.attr('number', {defaultValue: 1})
});
