import DS from 'ember-data';
import ENV from 'opentrials/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    authorizer: 'authorizer:jam-jwt',
    namespace: 'v1/id',
    host: ENV.jamdbURL,
    pathForType: function() {
      return `collections/${ENV.auth.self.defaultNamespace}.data/documents`;
    },
    urlForFindRecord(id, modelName, snapshot) {
      return `${ENV.jamdbURL}/v1/id/${modelName}s/${id}`;
    }
});
