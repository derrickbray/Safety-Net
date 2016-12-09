import Ember from 'ember';

export default Ember.Controller.extend({
  categoryOptions: [
    'Housing',
    'Food Assistance',
    'Clothing',
    'Transportation',
    "Children's Services",
    'Childcare',
    'Teen Services',
    'Rehabilitation/Drug/Alcohol Treatment',
    'Rent/Mortgage/Utilities/Cash Assistance',
    'Disability Services',
    'ESL Classes',
    'Health Insurance',
    'Phone',
    'Senior Services/Disabled Resources',
    'Tax Prep',
    'Pet Resources',
    "Men's Resources",
    'Counseling'
  ],
  queryParams: ['category'],
  category: ['Housing'],

  iconSize: [
    25, 41
  ],
  init() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setProperties({ lat: position.coords.latitude, lng: position.coords.longitude });
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
    const contactType = `contact_type in(${this.get('category').map(s => JSON.stringify(s)).replace('\'', "\\'").replace('"', '\'')
    .join(', ')})`;

    fetch(`https://data.nashville.gov/resource/8zc7-2afq.json?$limit=100&$where=within_polygon(location_1, '${polygon}') AND ${contactType}`).then(r => r.json()).then((nashvilleResources) => {
      this.set('nashvilleResources', nashvilleResources);
    });
  },

  lookupQueryParams: Ember.observer('category', function () {
    this.lookupSocrataData();
  }),

  actions: {
    updateCenter(e) {
      this.set('edges', e.target.getBounds());
      const center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);

      this.lookupSocrataData();
    },
    showDropdown() {},
    foo() {}
  }
});
