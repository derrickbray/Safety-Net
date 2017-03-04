import Ember from 'ember';
import Mixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(Mixin, {
  currentUser: Ember.inject.service(),

  beforeModel() {
    return this.get('currentUser').loadCurrentUser();
  }
});
