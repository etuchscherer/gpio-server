class A {
  constructor(pin) {
    this.id = pin;
    this.pin = pin;
  }
}

const cache = new Map();

function find(pin) {
  gpio._cache.get(pin);
};

function push(key, value) {
  gpio._cache.set(key, value);
}

function get(key) {
  return gpio._cache.get(key);
}

const gpio = {
  _cache: cache,
  find,
  push,
  get
};

var a = new A(12);
var b = new A(18);
gpio.push(12, a);

// cache.set(a.id, a);
// cache.set(b.id, b);

console.log(gpio._cache);

gpio.get(12);

console.log(cache);
// console.log(cache.has(b.id));