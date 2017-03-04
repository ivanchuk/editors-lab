import DS from 'ember-data';

const Video = DS.Model.extend({
  title:       DS.attr('string'),
  url:         DS.attr('string'),
  poster:      DS.attr('string'),
  timesGamed:  DS.attr('number'),
  currentTime: DS.attr('number', {defaultValue: 0}),
  playing:     DS.attr('boolean', {defaultValue: false}),
  surveys:     DS.hasMany('survey')
});

Video.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Discurso de Mariano Rajoy en el Debate de Investidura 26/10/2016',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/people',
      timesGamed: 80
    },
    {
      id: 2,
      title: 'Discurso de Mariano Rajoy en el Debate de Investidura 26/10/2016',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/city',
      timesGamed: 124
    },
    {
      id: 3,
      title: 'Discurso de Mariano Rajoy en el Debate de Investidura 26/10/2016',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/transport',
      timesGamed: 56
    }
  ]
});

export default Video;
