import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    addPledge(formValues) {
      const flashMessages = this.get('flashMessages');
      const pledge = this.model;

      if (formValues) {
        // Update Properties from the form
        pledge.setProperties(formValues);

        pledge.save().then(() => {
          flashMessages.success('You Changed Stuff!');

          this.transitionToRoute('admin.pledge.detail');
        });
      } else {
        alert('Oh no, you blew it!');
      }
    }
  }
});
