import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  pledge: DS.hasMany('pledge'),
  isAdmin: DS.attr('boolean'),
  isApproved: DS.attr('boolean')
});
