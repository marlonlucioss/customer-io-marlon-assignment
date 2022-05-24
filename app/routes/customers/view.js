import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CustomersViewRoute extends Route {
  @service router;
  model(params) {
    if (params.id) {
      this.router.transitionTo('customers.list');
    }
  }
}
