import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'video',
  classNames: ['uk-responsive-width'],
  attributeBindings: ['controls', 'autoplay', 'muted'],

  url:       null,
  playing:   false,
  logEvents: false,
  controls:  false,
  muted:     false,
  width:     '320',
  height:    '240',
  autoplay:  Ember.computed.alias('playing'),

  didInsertElement() {
    this._super(...arguments);
    Ember.run.later(this, _init, 0);
    this.get('logEvents') && Ember.run.later(this, _bindEvents, 0);
  },

  playingObserver: Ember.observer('playing', function() {
    if (this.get('playing')) {this.element.play();}
    else                     {this.element.pause();}
  })
});

/* Private  */

function _init() {
  const {element} = this;

  element.ontimeupdate = () => this.sendAction('on-timeupdate', this.element ? this.element.currentTime : 0);
  element.onplay       = () => this.sendAction('on-play');
  element.onpause      = () => this.sendAction('on-pause');
  element.onended      = () => this.sendAction('on-ended');
}

function _bindEvents() {
  const {element} = this;
  element.onabort          = _logEventClosure.call(this, 'abort');
  element.oncanplay        = _logEventClosure.call(this, 'canplay');
  element.oncanplaythrough = _logEventClosure.call(this, 'canplaythrough');
  element.ondurationchange = _logEventClosure.call(this, 'durationchange');
  element.onemptied        = _logEventClosure.call(this, 'emptied');
  element.onended          = _logEventClosure.call(this, 'ended');
  element.onerror          = _logEventClosure.call(this, 'error');
  element.onloadeddata     = _logEventClosure.call(this, 'loadeddata');
  element.onloadedmetadata = _logEventClosure.call(this, 'loadedmetadata');
  element.onloadstart      = _logEventClosure.call(this, 'loadstart');
  element.onpause          = _logEventClosure.call(this, 'pause');
  element.onplay           = _logEventClosure.call(this, 'play');
  element.onplaying        = _logEventClosure.call(this, 'playing');
  element.onprogress       = _logEventClosure.call(this, 'progress');
  element.onratechange     = _logEventClosure.call(this, 'ratechange');
  element.onseeked         = _logEventClosure.call(this, 'seeked');
  element.onseeking        = _logEventClosure.call(this, 'seeking');
  element.onstalled        = _logEventClosure.call(this, 'stalled');
  element.onsuspend        = _logEventClosure.call(this, 'suspend');
  element.ontimeupdate     = _logEventClosure.call(this, 'timeupdate');
  element.onvolumechange   = _logEventClosure.call(this, 'volumechange');
  element.onwaiting        = _logEventClosure.call(this, 'waiting');
}

function _logEventClosure(evt) {
  return function() {
    console.log(evt);
  };
}
