import Ember from 'ember';

export default Ember.Route.extend({
  model({ phone }) {
    return $.getJSON(`https://data.nashville.gov/resource/8zc7-2afq.json?phone_number=${phone}`);
  }
});
