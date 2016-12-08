import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    toggleAndSave(property) {
      const user = this.model;
      user.toggleProperty(property);
      user.save();
    },
});
