import DS from 'ember-data';
import Ember from 'ember';

//TODO override serialize as well
export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  }
});
