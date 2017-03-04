import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  importedFromGov: DS.attr('boolean'),
  organizations: DS.hasMany('organization')
});
