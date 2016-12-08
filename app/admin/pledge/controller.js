import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    toggleAndSave(property) {
      const pledge = this.model;
      pledge.toggleProperty(property);
      pledge.save();
    },

  },
});
