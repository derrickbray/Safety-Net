import { moduleForModel, test } from 'ember-qunit';

moduleForModel('local', 'Unit | Model | local', {
  // Specify the other units that are required for this test.
  needs: ['model:category']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
