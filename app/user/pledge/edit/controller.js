import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    addPledge(formValues) {
      const pledge = this.model;
      const flashMessages = this.get('flashMessages');
      if (formValues) {
        // Update Properties from the form
        pledge.setProperties(formValues);

        console.log(pledge);
        // debugger;
        pledge.save()
        .then(() => {
          flashMessages.success('You Did The Thing!');

          this.transitionToRoute('user.pledge');
        });
      } else {
        alert('Sorry, Something Went Wrong. Try Again.');
      }
    },
  },
});
