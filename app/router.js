import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('list', {path: '/'});
  this.route('video', {path: '/video/:id'});
  this.route('result', {path: '/result/:id'});
});

export default Router;
