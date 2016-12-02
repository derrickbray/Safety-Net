import DS from 'ember-data';

export default DS.Model.extend({
  orgName: DS.attr('string'),
  address: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  phone: DS.attr('string'),
  website: DS.attr('string'),
  isAdmin: DS.attr('boolean'),
  isApproved: DS.attr('boolean')
});
