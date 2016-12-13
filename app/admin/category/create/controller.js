import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    addCategory(formValues) {
      const flashMessages = this.get('flashMessages').add({ message: 'Custom message' });
      if (formValues) {
        const category = this.store.createRecord('category', formValues);
        category.set('category', this.model);

        category.save().then(() => {
          flashMessages.success('you did it');
          this.transitionToRoute('admin.category');
        })
       .catch(() => {
         flashMessages.danger('oh no');
       });
      }
    },
  }
});
