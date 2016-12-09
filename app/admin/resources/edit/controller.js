import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    updateResource(formValues) {
      const org = this.model;

      if (formValues) {
        // Update Properties from the form
        org.setProperties(formValues);

        org.save().then(() => {
          alert('Your Information was updated!');

          this.transitionToRoute('admin.resources');
        });
      } else {
        alert('Sorry, Something Went Wrong. Try Again.');
      }
    }
  }
});
