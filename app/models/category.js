import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  importedFromGov: DS.attr('boolean'),
  organization: DS.hasMany('organization')
});
