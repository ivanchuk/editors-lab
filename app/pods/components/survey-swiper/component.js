import Ember from 'ember';

const {Swiper} = window;

export default Ember.Component.extend({
  classNames: ['swiper-container'],

  didInsertElement() {
    this._super(...arguments);
    Ember.run.later(this, _init, 100);
  }
});

/* Private */

function _init() {
  new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 120,
  });
}
