import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return window.__FIXTURES__.then(() => this.store.peekRecord('video', 1)); // FIXME: forzed demo video
  }
});
