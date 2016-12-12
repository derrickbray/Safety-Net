import Ember from 'ember';

export default Ember.Route.extend({
  // model(params) {
  // const organization_id = params.organization_id;
  model({ organization_id }) {
    return Ember.RSVP.hash({
      organization: this.store.findRecord('organization', organization_id),
      categories: this.store.findAll('category'),
    });
  },
});
