import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.$.ajax({
      url: 'https://data.nashville.gov/resource/8zc7-2afq.json',
      type: 'GET',
      data: {
        $limit: 5000,
        $$app_token: 'wbK7vJffvoFe3AnSRui9tJpIs'
      }
    });
  }
});
