import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    addPledge(formValues) {
      if (formValues) {
        const pledge = this.store.createRecord('pledge', formValues);
        pledge.set('pledge', this.model);
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
