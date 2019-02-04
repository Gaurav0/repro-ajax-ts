import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | ajax', function(hooks) {
  setupTest(hooks);

  test('Ajax service extended', function(assert) {
    assert.expect(1);

    const service = this.owner.lookup('service:ajax');

    assert.equal(service.headers.Authenticated, true);
  });
});
