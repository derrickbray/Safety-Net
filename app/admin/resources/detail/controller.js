import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteOrg() {
      const no = this.model;
      no.destroyRecord();
      this.transitionToRoute('admin');
    }

  }

});
