import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteOrg() {
      const no = this.model;
      if (confirm('Are you for real?')) {
        no.destroyRecord();
        this.transitionToRoute('admin.resources');
      }
    }

  }

});
