import { assert } from 'chai';
import Cache from '@/services/cache';

let cache;

describe('cache service tests', () => {

  beforeEach(() => {
    cache = new Cache();
    cache.set(1, 'foo');
  });

  it('hits are true', () => {
    const hit = cache.has(1);
    assert.strictEqual(hit, true);
  });

  it('misses are false', () => {
    const miss = cache.has(2);
    assert.strictEqual(miss, false);
  });

  it('can set an item', () => {
    assert.strictEqual(cache.has(1), true);
  });

  it('can get an item', () => {
    assert.strictEqual(cache.get(1), 'foo');
  });

  it('can delete an item', () => {
    const wasDeleted = cache.delete(1);
    assert.strictEqual(wasDeleted, true);
    assert.strictEqual(cache.has(1), false);
  });

  it('can flush the cache', () => {
    cache.flush();
    assert.strictEqual(cache._cache.size, 0);
  });
});