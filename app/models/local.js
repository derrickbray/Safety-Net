import DS from 'ember-data';

export default DS.Model.extend({
  contact: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  notes: DS.attr('text'),
  location1: DS.attr('string'),
  categories: DS.hasMany('category')
});
