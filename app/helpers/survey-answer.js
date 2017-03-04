import Ember from 'ember';

export function surveyAnswer(params/*, hash*/) {
  const survey = params[0];
  return survey.get('answers')[survey.get('userAnswer')];
}

export default Ember.Helper.helper(surveyAnswer);
