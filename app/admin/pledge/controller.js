import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    toggleAndSave(pledge, property) {
      pledge.toggleProperty(property);
      pledge.save();
    },

    deletePledge() {
      const no = this.model;
      if (confirm('Are you for real?')) {
        no.destroyRecord();
        this.transitionToRoute('admin.pledge');
      }
    }

  }
});
