import Ember from 'ember';

const INTERVAL = 1000;

export default Ember.Controller.extend({
  timer: null,

  activeSurvey: Ember.computed('model.surveys.@each.active', function() {
    return this.get('model.surveys').filterBy('active', true).get('firstObject');
  }),

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

  actions: {
    updateCurrentTime(currentTime) {
      this.set('model.currentTime', currentTime);
    },

    ended() {
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
