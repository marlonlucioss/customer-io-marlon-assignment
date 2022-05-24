import Route from '@ember/routing/route';

export default class CustomersRoute extends Route {
  async model() {
    const response = await fetch('http://localhost:1323/customers');
    const { customers } = await response.json();
    return customers;
  }
}
