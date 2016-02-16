import Ember from 'ember';

export function truncate([val, length]/*, hash*/) {
  val = (val || '').toString().trim();
  return val.length > length ? val.substr(val, length-3) + '...' : val;
}

export default Ember.Helper.helper(truncate);
