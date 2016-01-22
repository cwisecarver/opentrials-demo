import DS from 'ember-data';
import ENV from 'opentrials/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    authorizer: 'authorizer:jam-jwt',
    namespace: 'v2',
    host: ENV.jamdbURL
});