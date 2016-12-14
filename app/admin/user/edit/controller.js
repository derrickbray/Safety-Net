import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    updateForm(formValues) {
      const flashMessages = this.get('flashMessages');
      const userInfo = this.model;
      this.model.get('organization').then((organization) => {
        if (formValues) {
          // Update Properties from the form
          userInfo.setProperties(formValues);

          userInfo.save().then(() => {
            flashMessages.success('Feel The Power!');
            this.transitionToRoute('admin.user');
          });
          organization.save()

          .then(() => {
            flashMessages.success('That`s right!');
            this.transitionToRoute('admin.user');
          });
        } else {
          alert('Sorry, I was not paying attention. Please try again.');
        }
      });
    },
  }
});
