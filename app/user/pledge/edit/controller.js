import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    addPledge(formValues) {
      const pledge = this.model;
      if (formValues) {
        // Update Properties from the form
        pledge.setProperties(formValues);

        console.log(pledge);
        // debugger;
        pledge.save()
        .then(() => {
        alert('Your pledge was updated!');

          this.transitionToRoute('user.pledge');
        });
      } else{
        alert('Sorry, Something Went Wrong. Try Again.');
      }
    },
  },
});
