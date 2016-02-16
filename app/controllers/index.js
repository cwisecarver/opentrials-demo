import Ember from 'ember';

let Promise = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

function clamp(val, hi, lo) {
  return (val > hi && hi) || (val < lo) && lo || val;
}

let controller = Ember.Controller.extend({
  filter: {},
  page: 1,

  trials: function () {
    let qp = Object.keys(this.get('filter')).reduce((acc, key) => {
      acc[`filter[${key.underscore()}]`] = this.get('filter')[key];
      return acc;
    }, {});
    qp.page = this.get('page');
    return new Promise({
      promise: this.store.query('document', qp).then(res => {
        this.notifyPropertyChange('results');
        return res;
      })
    });
  }.property('filter', 'page'),

  results: function() {
    return this.store._metadataFor('document').total;
  }.property('filter', 'page'),

  actions: {
    paginate(val) {
      let hi = Math.ceil(this.store._metadataFor('document').total / this.store._metadataFor('document').perPage);
      this.set('page', clamp(this.get('page') + val, hi, 1));
    },
    filter(key, value) {
      this.set('page', 1);
      this.get('filter')[key] = value;
      this.notifyPropertyChange('filter');
    },
    removeFilter(key) {
      this.set('page', 1);
      delete this.get('filter')[key];
      this.notifyPropertyChange('filter');
    },
    link(id) {
      this.transitionToRoute('trial', id);
    }
  },
  keyNames: [
    // 'acronym',
    // 'armGroups',
    // 'biospecDescr',
    // 'biospecRetention',
    'briefSummary',
    'briefTitle',
    // 'clinicalResults',
    // 'completionDateActual',
    // 'completionDateAnticipated',
    // 'enrollmentActual',
    'firstreceivedDate',
    // 'isFdaRegulated',
    // 'isSection801',
    'keywords',
    'linkText',
    'nctAliases',
    'nctId',
    'numberOfArms',
    'officialTitle',
    'orgStudyId',
    'otherOutcomes',
    'phase',
    'primaryCompletionDateActual',
    'primaryCompletionDateAnticipated',
    'removedCountries',
    'responsibleParty',
    'secondaryIds',
    'secondaryOutcomes',
    'source',
    'startDate',
    'studyDesign',
    'studyType',
    'targetDuration',
    'url',
    'verificationDate',
    'whyStopped',
  ],
});

controller.reopen({
  queryParams: ['page']
});

export default controller;
