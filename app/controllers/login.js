import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  queryParams: ['driver'],
  authDrivers: ['Jam'],
  driver: 'jam-auth',
  init: function() {
    this.set('driver', `jam-auth`);
  },

  actions: {
    authenticate(attrs) {
      this.get('session').authenticate('authenticator:jam-jwt', attrs).then(() => {

      });
    }
  }
});
