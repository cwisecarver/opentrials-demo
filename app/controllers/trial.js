import Ember from 'ember';

export default Ember.Controller.extend({
  stringified: function() {
    return JSON.stringify(this.get('model.data'), null, '\t');
  }.property('model'),
  actions: {
    back() {
      this.transitionToRoute('index');
    }
  }
});
