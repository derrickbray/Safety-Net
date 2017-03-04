import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCategory(formValues) {
      const category = this.model;

      if (formValues) {
        // Update Properties from the form
        category.setProperties(formValues);

        category.save().then(() => {
          alert('You added a category! Good job!');

          this.transitionToRoute('admin.category');
        });
      } else {
        alert('Oh So Sorry, Something Went Wrong.');
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
