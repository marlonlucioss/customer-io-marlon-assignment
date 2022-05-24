import EmberRouter from '@ember/routing/router';
import config from 'customer-io-marlon-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('customers', function () {
    this.route('view', { path: '/:id' });
    this.route('list');
  });
});
