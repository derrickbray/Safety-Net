import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCategory(formValues) {
      if (formValues) {
        const category = this.store.createRecord('category', formValues);
        category.set('category', this.model);

        category.save()
        .then(() => {
          alert('It worked!');
        });
        this.transitionToRoute('admin.category');
      } else {
        alert('It no work!');
      }
    },
  },
});
