import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('about');
  this.route('login');
  this.route('sign-up');
  this.route('resources', function () {
    this.route('detail-local', { path: '/sn/:organization_id' });
    this.route('detail-nashville', { path: '/nashville/:phone' });
  });


  this.route('user', function () {
    this.route('pledge', function () {
      this.route('create', { path: '/' });
      this.route('edit', { path: '/:pledge_id/edit' });
      this.route('old');
    });
  });

  this.route('admin', function () {
    this.route('user', function () {
      this.route('detail', { path: '/:user_id' });
      this.route('edit', { path: '/:user_id/edit' });
      this.route('pledge', () => {
      });
    });
    this.route('pledge', function () {
      this.route('detail', { path: '/:pledge_id' });
      this.route('edit', { path: '/:pledge_id/edit' });
    });
    this.route('resources', function () {
      this.route('detail', { path: '/:organization_id' });
      this.route('edit', { path: '/:organization_id/edit' });
    });
    this.route('category', function () {
      this.route('create');
      this.route('edit', { path: '/:category_id/edit' });
    });
  });
  this.route('logout');
  this.route('nashville-test');
});

export default Router;
