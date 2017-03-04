import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToVideo(video) {
      this.transitionToRoute('video', video);
    }
  }
});
