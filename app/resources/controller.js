import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setProperties({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });

      console.log(this.getProperties('lat', 'lng'));
    });
  },
  lat: 36.1526986,
  lng: -86.7761604,
  zoom: 10,
  emberConfLocation: [36.1526986, -86.7761604],
  hotel: [36.1526986, -86.8061604],

  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
    },
    showDropdown() {

    },
  }
});
