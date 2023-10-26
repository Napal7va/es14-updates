const weak = new WeakMap();

const key = Symbol('my ref');
const someObject = { a:1 };

weak.set(key, someObject);
console.log(weak.get(key));

// Здесь указаны варианты использования, связанные с ShadowRealms и Record & Tuples и с использованием символов в качестве WeakMaps.