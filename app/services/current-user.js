import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  user: null,

  loadCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', {current: true})
        .then((user) => {
          this.set('user', user);
        });
    }
  }
});
