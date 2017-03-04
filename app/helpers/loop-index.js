import Ember from 'ember';

export function loopIndex(index/*, hash*/) {
  return Number(index) + 1;
}

export default Ember.Helper.helper(loopIndex);
