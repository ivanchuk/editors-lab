import Ember from 'ember';

const LIST_ROUTE = 'list';

export default Ember.Route.extend({
  setupController(controller/*, model*/) {
    this._super(...arguments);

    controller.set('showBackButton', _isHome.call(this));
    this.router.addObserver('currentRouteName', this, function() {
      controller.set('showBackButton', _isHome.call(this));
    });
  }
});

/* Private */

function _isHome() {
  return this.router.currentRouteName !== LIST_ROUTE;
}
