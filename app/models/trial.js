import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr('string'),
  dataRef: DS.attr('string'),
  createdBy: DS.attr('string'),
  createdOn: DS.attr('date'),
  modifiedOn: DS.attr('date'),
  logRef: DS.attr('string'),
  trialData: DS.attr('object'),
  ref: DS.attr('string'),
  modifiedBy: DS.attr('string')
});
