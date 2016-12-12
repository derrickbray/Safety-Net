import Ember from 'ember';

export default Ember.Controller.extend({
  map: Ember.inject.service(),

  attemptRecenterMap: Ember.observer('model', function () {
    const coordinates = this.get('model.firstObject.location_1.coordinates');
    if (coordinates) {
      console.log(coordinates);
      this.get('map').centerMap(coordinates[1], coordinates[0]);
    }
  }),
});
