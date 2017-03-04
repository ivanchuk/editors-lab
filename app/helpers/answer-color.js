import Ember from 'ember';

const
  TRUE  = 'Verdadero',
  FALSE = 'Falso'
;

export function answerColor(params/*, hash*/) {
  const answer = params[0];

  switch (answer) {
    case TRUE:
      return 'uk-button-success';
    case FALSE:
      return 'uk-button-danger';
    default:
      return '';
  }
}

export default Ember.Helper.helper(answerColor);
