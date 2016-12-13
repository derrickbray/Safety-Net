import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCategory(formValues) {
      const category = this.model;

      if (formValues) {
        // Update Properties from the form
        category.setProperties(formValues);

        category.save().then(() => {
          alert('Your Information was updated!');

          this.transitionToRoute('admin.category');
        });
      } else {
        alert('Sorry, Something Went Wrong. Try Again.');
      }
    },

    deleteCategory() {
      const no = this.model;
      if (confirm('Are you for real?')) {
        no.destroyRecord();
        this.transitionToRoute('admin.category');
      }
    }
  }
});
