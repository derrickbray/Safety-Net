import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formValues) {
      console.log(formValues);

      const user = this.store.createRecord('user', formValues);

      user.save().then(() => {
        // return this.transitionToRoute('user.pledge');;
      });
    },
  }
});
