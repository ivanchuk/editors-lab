import Ember from 'ember';

const {RadialProgressChart} = window;

export default Ember.Component.extend({
  classNames: ['rpc-container'],

  percent: 0,

  didInsertElement() {
    this._super(...arguments);
    Ember.run.later(this, _init, 0);
  }
});

/* Private */

function _init() {
  var progress = new RadialProgressChart('.rpc-progress', {
    diameter: 200,
    series: [{
//     labelStart: '\uF105',
     value: this.get('value'),
//     color: {
//       linearGradient: {
//         x1: '0%',
//         y1: '100%',
//         x2: '50%',
//         y2: '0%',
//         spreadMethod: 'pad'
//       },
//       stops: [{
//         offset: '0%',
//         'stop-color': '#000',
//         'stop-opacity': 1
//       }, {
//         offset: '100%',
//         'stop-color': '#000',
//         'stop-opacity': 1
//       }]
//     }
    }],
    center: function(p) {
      return p + ' %';
    }
  });

  this.set('progress', progress);
//  loop(10);
}

function loop(p) {
  if (p > 100) {
    setTimeout(function() {
      loop(0);
    }, 3000);
  } else {
    this.get('progress').update(p);
    setTimeout(function() {
      loop(p + 1);
    }, 90);
  }
}
