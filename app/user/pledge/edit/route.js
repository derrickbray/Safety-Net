import Ember from 'ember';

export default Ember.Route.extend({
  model({ pledge_id }) {
    return this.store.findRecord('pledge', pledge_id);
  },
});
