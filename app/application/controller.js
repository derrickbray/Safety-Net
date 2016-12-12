import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),

  actions: {
    displayMenu() {
      Ember.getElementsByClassName('nav-right__mobile').style.display = 'block';
      Ember.getElementsByClassName('nav-right__ex').style.display = 'block';
    },
    closeMenu() {
      Ember.getElementsByClassName('nav-right__mobile').style.display = 'none';
      Ember.getElementsByClassName('nav-right__ex').style.display = 'none';
    },
  }
});
