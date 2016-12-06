import Ember from 'ember';

export default Ember.Route.extend({
  model({ user_id }) {
    return this.store.findRecord('user', user_id);
  },
});
