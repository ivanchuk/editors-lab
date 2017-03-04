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
      title: 'Discurso de Mariano Rajoy en el Debate de Investidura (26/10/2016)',
      url: 'rajoy-corto-12mb.mp4',
      poster: 'images/rajoy.png',
      timesGamed: 80
    },
    {
      id: 2,
      title: 'El ministro José Manuel Soria explica en rueda de prensa su vinculación con el escándalo de los Papeles de Panamá (15/04/2016)',
      url: 'rajoy-corto-12mb.mp4',
      poster: 'images/soria.png',
      timesGamed: 124
    },
    {
      id: 3,
      title: 'Pablo Iglesias habla de Podemos y pide perdón por las guerras internas en el partido (02/03/2016)',
      url: 'rajoy-corto-12mb.mp4',
      poster: 'images/iglesias.png',
      timesGamed: 56
    },
    {
      id: 4,
      title: 'El concejal del Ayuntamiento de Guipuzkoa Martín Ibade explica el polémico desalojo de los vecinos del muelle (03/02/2017)',
      url: 'rajoy-corto-12mb.mp4',
      poster: 'images/puerto.png',
      timesGamed: 56
    },
    {
      id: 5,
      title: 'Álvaro Nadal, ministro de Energía, explica en comisión la subida del recibo de la luz (26/01/17)',
      url: 'rajoy-corto-12mb.mp4',
      poster: 'images/alvaro-nadal.png',
      timesGamed: 56
    },
    {
      id: 6,
      title: 'Imanol Lasa desgrana las partidas presupuestarias de la Diputación destinadas a la I+D en Guipuzkoa (01/03/2017)',
      url: 'rajoy-corto-12mb.mp4',
      poster: 'images/diputacion-guipuzkoa.png',
      timesGamed: 56
    },
    {
      id: 7,
      title: 'Rita Barberá explica en rueda de prensa por qué no dimite a pesar de ser imputada por corrupción (15/03/2016)',
      url: 'rajoy-corto-12mb.mp4',
      poster: 'images/rita-barbera.png',
      timesGamed: 56
    },
    {
      id: 8,
      title: 'La presidenta de la federación de comerciantes explica cómo han contribuido a mejorar el barrio dle Atza de San Sebastián (02/05/2017)',
      url: 'rajoy-corto-12mb.mp4',
      poster: 'images/altza.png',
      timesGamed: 56
    }
  ]
});

export default Video;
