import Ember from 'ember';

export default Ember.Service.extend({
  lat: 36.1526986,
  lng: -86.7761604,
  zoom: 15,

  awaitingGeolocation: true,

  centerMap(lat, lng, fromGeolocation) {
    // Don't allow window geolocation to force move
    if (fromGeolocation && !this.get('awaitingGeolocation')) {
      return;
    }

    this.set('lat', lat);
    this.set('lng', lng);

    this.set('awaitingGeolocation', false);
  },
});
