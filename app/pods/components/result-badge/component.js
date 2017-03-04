import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tm-result-badge', 'uk-text-center', 'uk-margin-top'],

  percent: null,

  badge1: Ember.computed('percent', function() {
    return this.get('percent') < 50 ? '-o' : '';
  }),

  badge2: Ember.computed('percent', function() {
    return this.get('percent') < 75 ? '-o' : '';
  }),

  badge3: Ember.computed('percent', function() {
    return this.get('percent') < 100 ? '-o' : '';
  })
});
