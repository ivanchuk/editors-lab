import Ember from 'ember';

export default Ember.Route.extend({
//  service: Ember.inject.service('video'),

  model() {
    return window.__FIXTURES__.then(() => this.store.peekRecord('video', 1)); // FIXME: forzed demo video
  },

//  afterModel(model) {
//    this.get('service').start(model);
//  },

  setupController(controller/*, model*/) {
    this._super(...arguments);
    controller.play();
  },

  actions: {
    willTransition() {
      this.controller.pause();
    }
  }
});
