import { remove } from '@/utils/collection';
import { assert } from 'chai';

let collection;

describe('collection utils', () => {

  beforeEach(() => {
    collection = [
      { id: '88', name: 'foo' },
      { id: '99', name: 'Have fun boys and girls' },
      { id: '108', name: 'You are awesome!' }
    ];
  });

  it('can remove an item from the collection', () => {
    assert.strictEqual(collection.length, 3);
    collection = remove(collection, 'id', '88');
    assert.strictEqual(collection.length, 2);
  });

  it('removes the right item from the collection', () => {
    let item = collection.find(obj => obj['id'] === '88');
    assert.strictEqual(item.name, 'foo');

    collection = remove(collection, 'id', '88');
    item = collection.find(obj => obj['id'] === '88');
    assert.strictEqual(item, undefined);
  });
});