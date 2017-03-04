import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['uk-comment'],

  image: null,
  text: null,
  meta: null,

  click() {
    this.sendAction('on-clicked');
  }
});
