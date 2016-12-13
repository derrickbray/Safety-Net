import Ember from 'ember';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    addCategory(formValues) {
      const flashMessages = Ember.get(this, 'flashMessages').add({ message: 'Custom message' });
      if (formValues) {
        const category = this.store.createRecord('category', formValues);
        category.set('category', this.model);

        category.save().then(() => {
          this.transitionToRoute('admin.category');
        });
      } else {
        alert('It no work!');
      }
    }
  }
});
