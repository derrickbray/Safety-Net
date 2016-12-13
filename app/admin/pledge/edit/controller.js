import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    addPledge(formValues) {
      const pledge = this.model;

      if (formValues) {
        // Update Properties from the form
        pledge.setProperties(formValues);

        pledge.save().then(() => {
          alert('You did it! Great Job!');

          this.transitionToRoute('admin.pledge.detail');
        });
      } else {
        alert('Oh no, you blew it!');
      }
    }
  }
});
