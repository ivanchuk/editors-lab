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
      title: 'Rueda de prensa de José Manuel Soria (Ministro de Industria, Energía y Turismo) 15/04/2016',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/city',
      timesGamed: 124
    },
    {
      id: 3,
      title: 'Albert Rivera (Presidente de Ciudadanos) en el Discurso de Investidura en el Congreso 02/03/2016',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/transport',
      timesGamed: 56
    },
    {
      id: 4,
      title: 'Pablo Iglesias (Secretario General de Podemos) en el Discurso de Investidura en el Congreso 02/03/2016',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/abstract',
      timesGamed: 56
    },
    {
      id: 5,
      title: 'Albert Rivera (Presidente de Ciudadanos) entrevista en Onda Cero 31/03/2016',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/animals',
      timesGamed: 56
    },
    {
      id: 6,
      title: 'Mariano Rajoy (Presidente del Gobierno) Sesión de control del Gobierno 30/11/2016',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/business',
      timesGamed: 56
    },
    {
      id: 7,
      title: 'Miguel Gutiérrez (Secretario general del grupo parlamentario de Ciudadanos en el Congreso) entrevista en RNE 03/03/2017',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/cats',
      timesGamed: 56
    },
    {
      id: 8,
      title: 'Alfonso Dastis (Ministro de Exteriores) entrevista en Antena 3 12/02/2017',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/fashion',
      timesGamed: 56
    },
    {
      id: 9,
      title: 'Irene Montero (Miembro de la dirección de Podemos) entrevista en El Confidencial 07/02/2017',
      url: 'rajoy-corto-12mb.mp4',
      poster: '//lorempixel.com/100/75/food',
      timesGamed: 56
    }
  ]
});

export default Video;
