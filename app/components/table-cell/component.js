import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['isNumber:mdl-data-table__cell--non-numeric'],

  key: null,
  data: null,
  filter: null,
  keyNames: null,

  isNumber: function() {
    return typeof(this.get('data')) !== 'number';
  }.property('data'),

  isArray: function() {
    return Ember.isArray(this.get('data'));
  }.property('data'),

  actions: {
    filter() {
      this.get('filter')(...arguments);
    },
    link(id) {
      this.get('link')(...arguments);
    }
  }

});
