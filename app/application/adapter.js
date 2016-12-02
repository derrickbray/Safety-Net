import DS from 'ember-data';
import config from '../config/environment';

// http://localhost:3333/api/BLAH

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
  namespace: config.DS.namespace,
});
