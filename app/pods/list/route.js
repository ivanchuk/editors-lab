import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return window.__FIXTURES__.then(() => this.store.peekAll('video'));
  }
});
