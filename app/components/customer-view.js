import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked isOnEdit = false;
  @tracked new_customer_attrs = {};
  @tracked customer = this.args.model;
  @tracked original_customer_attrs = {};
  @tracked foo = 'bar';

  get computedFoo() {
    return `computed ${this.foo}`;
  }

  @action
  inputChange(el) {
    console.log(el);
  }

  async updateCustomer(data) {
    const response = await fetch(
      'http://localhost:1323/customers/' + this.customer.id,
      {
        method: 'PATCH',
        body: JSON.stringify({
          customer: {
            ...this.customer,
            attributes: data,
          },
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    return response;
  }

  @action
  setIsOnEdit(data) {
    this.original_customer_attrs = { ...data.attributes };
    this.isOnEdit = !this.isOnEdit;
  }

  @action
  add(data) {
    const newAttr = { ...this.new_customer_attrs };
    newAttr[data.key] = data.value;
    this.new_customer_attrs = newAttr;
    this.customer = {
      ...this.customer,
      attributes: {
        ...this.customer.attributes,
        ...this.new_customer_attrs,
      },
    };
  }

  @action
  removeItem(key) {
    const newAttrObj = { ...this.customer.attributes };
    delete newAttrObj[key];
    this.customer = {
      ...this.customer,
      attributes: {
        ...newAttrObj,
      },
    };
  }

  @action
  save(data) {
    this.updateCustomer(data)
      .then(() => {
        this.isOnEdit = !this.isOnEdit;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  @action
  discard() {
    this.new_customer_attrs = {};
    this.customer = {
      ...this.customer,
      attributes: this.original_customer_attrs,
    };
    this.isOnEdit = !this.isOnEdit;
  }
}
