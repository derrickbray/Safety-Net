import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('text'),
  contactInfo: DS.attr('string'),
  duration: DS.attr('string'),
  isApproved: DS.attr('boolean'),
  user: DS.belongsTo('user'),

  deletedAt: DS.attr('date'),
});
