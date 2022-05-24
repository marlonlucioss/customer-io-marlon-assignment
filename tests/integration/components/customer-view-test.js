import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | customer-view', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CustomerView />`);

    // Template block usage:
    await render(hbs`
      <CustomerView>
        template block text
      </CustomerView>
    `);
    this.set('foo', 'foobar');
    assert.dom(this.foo).hasText('foobar');
  });
});
