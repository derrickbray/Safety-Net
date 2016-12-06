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
  zoom: 15,

  lookupSocrataData() {
    const northEast = `${this.get('edges._northEast.lng')} ${this.get('edges._northEast.lat')}`;
    const northWest = `${this.get('edges._southWest.lng')} ${this.get('edges._northEast.lat')}`;
    const southWest = `${this.get('edges._southWest.lng')} ${this.get('edges._southWest.lat')}`;
    const southEast = `${this.get('edges._northEast.lng')} ${this.get('edges._southWest.lat')}`;
    const polygon = `MULTIPOLYGON (((${northEast}, ${northWest}, ${southWest}, ${southEast}, ${northEast})))`;

    fetch(`https://data.nashville.gov/resource/8zc7-2afq.json?$limit=100&$where=within_polygon(location_1, '${polygon}')`)
      .then(r => r.json())
      .then((nashvilleResources) => {
        this.set('nashvilleResources', nashvilleResources);
      });
  },

  actions: {
    updateCenter(e) {
      this.set('edges', e.target.getBounds());
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);

      this.lookupSocrataData();
    },
    showDropdown() {

    },
  }
});
