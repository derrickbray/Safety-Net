import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    toggleCategory(category, { target }) {
      if (target.checked) {
        this.model.organization.get('categories').addObject(category);
      } else {
        console.log('remove');
        this.model.organization.get('categories').removeObject(category);
      }

      this.model.organization.save();
    },

    updateResource(formValues) {
      const org = this.model.organization;
      const flashMessages = this.get('flashMessages');
      if (formValues) {
        // Update Properties from the form
        org.setProperties(formValues);

        org.save().then(() => {
          flashMessages.success('You Did It!');

          this.transitionToRoute('admin.resources');
        });
      } else {
        alert('Oh no, we should give up!');
      }
    }
  }
});
