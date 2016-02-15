import Ember from 'ember';


export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  __buildQueryParams: function() {
    window.theStore = this.store;
  },
  queryParams: [
    {
      keyword: 'filter[keywords]'
    }
  ],
  keyword: null,
  filteredTrials: function() {
    this.__buildQueryParams();
    var keyword = this.get('keyword');
    if (keyword) {
      return this.store.query('document', {
        filter:{
          keywords: keyword
        }
      });
    } else {
      return this.store.findAll('document');
    }
  }.property('keyword', 'model')
});
