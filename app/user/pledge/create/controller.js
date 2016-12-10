import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPledge(formValues) {
      if (formValues) {
        const pledge = this.store.createRecord('pledge', formValues);
        pledge.set('pledge', this.model);

        pledge.save()
        .then(() => {
          alert('Your pledge was sent for approval!');

          this.send('reloadData');
        });
      } else {
        alert('Sorry, Something Went Wrong. Try Again.');
      }
    },
  },
});
