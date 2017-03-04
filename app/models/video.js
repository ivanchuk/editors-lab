import DS from 'ember-data';

const Video = DS.Model.extend({
  title:       DS.attr('string'),
  url:         DS.attr('string'),
  currentTime: DS.attr('number', {defaultValue: 0}),
  playing:     DS.attr('boolean', {defaultValue: false}),
  surveys:     DS.hasMany('survey')
});

Video.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Rajoy ...',
      url: 'http://localhost:4200/sample.mp4'
    }
  ]
});

export default Video;
