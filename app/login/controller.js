import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    checkForm() {
      this.transitionToRoute('user.pledge');
    },
  }
});
