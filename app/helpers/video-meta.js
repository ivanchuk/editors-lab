import Ember from 'ember';

export function videoMeta(params/*, hash*/) {
  const video = params[0];
  return `Han jugado ${video.get('timesGamed')} veces`;
}

export default Ember.Helper.helper(videoMeta);
