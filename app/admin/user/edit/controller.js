import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    updateForm(formValues) {
      const userInfo = this.model;
      this.model.get('organization').then((organization) => {
        if (formValues) {
          // Update Properties from the form
          userInfo.setProperties(formValues);

          userInfo.save()
          organization.save()
          .then(() => {
            alert('Your Information was updated!');

            this.transitionToRoute('admin.user.detail');
          });
        } else{
          alert('Sorry, Something Went Wrong. Try Again.');
        }
      });
    },
  }
});
