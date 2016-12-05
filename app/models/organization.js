import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),
  website: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  user: DS.belongsTo('user'),

  location: Ember.computed('lng', 'lat', function() {
    return [this.get('lat'), this.get('lng')];
  }),
});
