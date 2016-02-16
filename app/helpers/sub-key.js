import Ember from 'ember';

export function subKey([obj, key]/*, hash*/) {
  return obj[key]
}

export default Ember.Helper.helper(subKey);
