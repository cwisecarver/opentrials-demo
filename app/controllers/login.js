import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  queryParams: ['driver'],
  authDrivers: ['Jam'],
  driver: 'jam-auth',

  actions: {
    selectAuthMethod(method) {
      this.set('driver', `${method.toLowerCase()}-auth`);
    },
    authenticate(attrs) {
      this.get('session').authenticate('authenticator:jam-jwt', attrs).then(() => {
        // this doesn't seem to need to be here
        // this.set('model', this.store.findAll('document'));
      });
    }
  }
});
