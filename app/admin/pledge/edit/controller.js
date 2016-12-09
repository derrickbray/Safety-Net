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
          alert('Your Information was updated!');

          this.transitionToRoute('admin.pledge.detail');
        });
      } else {
        alert('Sorry, Something Went Wrong. Try Again.');
      }
    }
  }
});
