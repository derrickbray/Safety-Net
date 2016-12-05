import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    saveForm(formValues) {
      console.log(formValues);

      const user = this.store.createRecord('user', formValues);

      user.save().then(() => {
        const org = this.store.createRecord('organization', formValues);
        org.set('user', user);

        return org.save();
      }).then(() => {
        const secretStuff = {
          identification: formValues.email,
          password: formValues.password,
        };
        const authenticator = 'authenticator:jwt';

        this.get('session').authenticate(authenticator, secretStuff)
          .then(() => {
          this.transitionToRoute('user.pledge');
        });
      })
      .catch(() => {
        alert('Error Creating User');
      });
    },
  }
});
