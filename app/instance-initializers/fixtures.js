import Ember from 'ember';

export function initialize(appInstance) {
  const store = appInstance.lookup('service:store');

  window.__FIXTURES__ = Ember.RSVP.Promise.all([
    store.findAll('video'),
    store.findAll('survey')
  ]);
}

export default {
  name: 'fixtures',
  initialize
};
