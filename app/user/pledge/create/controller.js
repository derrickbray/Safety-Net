import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    addPledge(formValues) {
      if (formValues) {
        const pledge = this.store.createRecord('pledge', formValues);
        const flashMessages = this.get('flashMessages');
        pledge.set('pledge', this.model);

        pledge.save()
        .then(() => {
          this.send('reloadData')
          .flashMessages.success('Your Pledge Has Been Sent To The Admin.');
        });
      } else {
        alert('Sorry, Something Went Wrong. Try Again.');
      }
    },
  },
});
