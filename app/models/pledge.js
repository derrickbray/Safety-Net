import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  contactInfo: DS.attr('string'),
  duration: DS.attr('number'),
  isApproved: DS.attr('boolean'),
  user: DS.belongsTo('user'),

  deletedAt: DS.attr('date'),
});
