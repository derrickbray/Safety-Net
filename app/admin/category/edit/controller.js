import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    addCategory(formValues) {
      const flashMessages = this.get('flashMessages');
      const category = this.model;

      if (formValues) {
        // Update Properties from the form
        category.setProperties(formValues);

        category.save().then(() => {
          flashMessages.success('You Changed Stuff!');

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
