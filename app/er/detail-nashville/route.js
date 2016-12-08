import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.getJSON(`https://data.nashville.gov/resource/8zc7-2afq.json?contact_type=Housing`)
  }
});
