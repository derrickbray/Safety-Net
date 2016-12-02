import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    checkForm(formValues) {
      const secretStuff = {
        identification: formValues.email,
        password: formValues.password,
      };
      const authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, secretStuff).then(() => {
        this.transitionToRoute('user.pledge');
      });
    },
  }
});
