import Ember from 'ember';

let Promise = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

export default Ember.Controller.extend({
  query: '',
  key: null,
  value: null,
  init () {
    this._super.apply(this, arguments);
    this.set('trials', Promise.create({
      promise: this.store.findAll('document')
    }));
  },
  updateQuery: function () {
    this.set('trials', Promise.create());
  }.observes('query'),
  resolveQuery: function () {
    if (this.get('query').length === 0) {
      return this.set('trials.promise', this.store.findAll('document'));
    }
    this.set('trials.promise', this.store.query(this.get('key'), {q: this.get('query')}));
  }.observes('query')
});
