import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),

  actions: {
    displayMenu() {
      document.getElementsByClassName('nav-right__mobile').style.display = 'block';
      document.getElementsByClassName('nav-right__ex').style.display = 'block';
    },
    closeMenu() {
      document.getElementsByClassName('nav-right__mobile').style.display = 'none';
      document.getElementsByClassName('nav-right__ex').style.display = 'none';
    },
  }
});
