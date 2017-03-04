import Ember from 'ember';

const INTERVAL = 1000;

export default Ember.Controller.extend({
  timer: null,

  play() {
    const video = this.get('model');

    video.set('playing', true);
    this.set('timer', setInterval(_check.bind(this), INTERVAL, video, video.get('surveys')));
  },

  pause() {
    const video = this.get('model');

    video.setProperties({
      currentTime: 0,
      playing: false
    });

    if (this.get('timer')) {
      clearInterval(this.get('timer'));
      this.set('timer', null);
    }
  },

//  resume(survey) {
//    survey.removeObserver('userAnswer', this, 'resume');
//    survey.set('active', false);
//    this.start(survey.get('video'));
//  },

  actions: {
    updateCurrentTime(currentTime) {
      this.set('model.currentTime', currentTime);
    },

    ended() {
      console.log('ended');
      this.transitionToRoute('result', this.get('model'));
    },

    playing(playing) {
      this.set('model.playing', playing);
    },

    response(survey, index) {
      survey.setProperties({
        userAnswer: index,
        active: false
      });
      if (!this.get('timer')) {this.play();}
    }
  }
});

/* Private */

function _check(video, surveys) {
  surveys.forEach((survey) => {
    if (video.get('currentTime') > survey.get('fromSecond') &&
        video.get('currentTime') < survey.get('toSecond')) {
      if (!survey.get('answered')) {survey.set('active', true);}
    } else {
      if (survey.get('active') && !survey.get('answered')) {
        return this.pause();
      }
      survey.set('active', false);
    }
  });
}
