import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    updateForm(formValues) {
      const pledgeInfo = this.model;
      this.model.get('pledge').then((pledge) => {
        if (formValues) {
          // Update Properties from the form
          pledgeInfo.setProperties(formValues);

          pledgeInfo.save()
          pledge.save().then(() => {
            alert('Your Information was updated!');

            this.transitionToRoute('admin.pledge.detail');
          });
        } else {
          alert('Sorry, Something Went Wrong. Try Again.');
        }
      });
    }
  }
});
