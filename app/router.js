import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('login');
  this.route('sign-up');
  this.route('resources', function() {
    this.route('er');
  });
  this.route('admin', function() {
    this.route('pledge', function() {
      this.route('edit');
    });
    this.route('user', function() {
      this.route('detail');
      this.route('edit');
    });
    this.route('pledge', function() {
      this.route('create');
      this.route('edit');
      this.route('display');
      this.route('detail');
    });
    this.route('resources', function() {
      this.route('detail');
      this.route('edit');
    });
    this.route('category', function() {
      this.route('create');
      this.route('edit');
    });
  });
});

export default Router;
