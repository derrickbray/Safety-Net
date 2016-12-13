import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    toggleAndSave(property) {
      const user = this.model;
      user.toggleProperty(property);
      user.save();
    },

    deleteUser() {
      const no = this.model;
      if (confirm('Are you for real?')) {
        no.destroyRecord();
        this.transitionToRoute('admin.user');
      }
    }

  },
});
