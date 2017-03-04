import Ember from 'ember';
import DS from 'ember-data';

const Survey = DS.Model.extend({
  question:        DS.attr('string'),
  answers:         DS.attr(),
  userAnswer:      DS.attr('number'),
  editorialAnswer: DS.attr('number'),
  fromSecond:      DS.attr('number'),
  toSecond:        DS.attr('number'),
  active:          DS.attr('boolean', {defaultValue: false}),
  video:           DS.belongsTo('video'),

  answered:  Ember.computed.notEmpty('userAnswer'),
  isSuccess: Ember.computed('userAnswer', 'editorialAnswer', function() {
    return this.get('userAnswer') === this.get('editorialAnswer');
  })
});

Survey.reopenClass({
  FIXTURES: [
    {
      id: 1,
      question: 'Pregunta 1',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 1,
//      userAnswer: 1,
      fromSecond: 2,
      toSecond: 5,
      video: 1
    },
    {
      id: 2,
      question: 'Pregunta 2',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 0,
//      userAnswer: 1,
      fromSecond: 10,
      toSecond: 12,
      video: 1
    },
    {
      id: 3,
      question: 'Pregunta 3',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 1,
//      userAnswer: 1,
      fromSecond: 15,
      toSecond: 20,
      video: 1
    },
    {
      id: 4,
      question: 'Pregunta 4',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 1,
//      userAnswer: 1,
      fromSecond: 30,
      toSecond: 40,
      video: 1
    },
    {
      id: 5,
      question: 'Pregunta 5',
      answers: [
        'Verdadero',
        'Falso'
      ],
      editorialAnswer: 0,
//      userAnswer: 0,
      fromSecond: 45,
      toSecond: 47,
      video: 1
    }
  ]
});

export default Survey;
