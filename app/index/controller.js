import Ember from 'ember';
export default Ember.Controller.extend({
  categoryOptions: ['Housing', 'Food Assistance', 'Clothing', 'Transportation', "Children's Services", 'Childcare', 'Teen Services', 'Rehabilitation/Drug/Alcohol Treatment', 'Rent/Mortgage/Utilities/Cash Assistance', 'Disability Services', 'ESL Classes', 'Health Insurance', 'Phone', 'Senior Services/Disabled Resources', 'Tax Prep', 'Pet Resources', "Men's Resources", 'Counseling'],
  queryParams: ['category'],
  category: ['Housing'],

  actions: {
    chooseCategory(category) {
      this.set('category', category);
      // this.calculateRoute();
      // this.updatePrice();
    }
  }
});
