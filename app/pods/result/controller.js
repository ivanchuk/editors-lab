import Ember from 'ember';

export default Ember.Controller.extend({
  total: Ember.computed.alias('model.surveys.length'),

  success: Ember.computed('model.surveys.@each.success', function() {
    return this.get('model.surveys')
      .filterBy('isSuccess', true)
      .get('length')
    ;
  }),

  percent: Ember.computed('success', 'total', function() {
    return Number((this.get('success') * 100 / this.get('total')).toFixed(2));
  })
});
