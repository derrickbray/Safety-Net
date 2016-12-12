import Ember from 'ember';

export default Ember.Controller.extend({
  map: Ember.inject.service(),

  attemptRecenterMap: Ember.observer('model.lat', 'model.lng', function () {
    if (this.get('model.lat') && this.get('model.lng')) {
      this.get('map').centerMap(this.get('model.lat'), this.get('model.lng'));
    }
  }),
});
