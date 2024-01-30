// 借助轻量级Parcel构建，测试用例。
import storage from '../src/index.ts'

console.log('测试storage...')

storage._localStorage.set('key1', {a: 1, b: 2});
storage._localStorage.set('key2', 1);
storage._localStorage.set('key3', 'str');
storage._localStorage.set('key4', [{a: 1, b: 2}]);
storage._localStorage.set('key5', null);

console.log(storage._localStorage.get('key1'));
console.log(storage._localStorage.has('key1'));
storage._localStorage.remove('key1');
// storage._localStorage.clear();
storage._localStorage.forEachChild((key, val) => {
  console.log(key, val);
})
console.log(storage._localStorage.getAll());

storage._sessionStorage.set('key11', {a: 1, b: 2});
storage._sessionStorage.set('key12', 1);
storage._sessionStorage.set('key13', 'str');
storage._sessionStorage.set('key14', [{a: 1, b: 2}]);
storage._sessionStorage.set('key15', null);

console.log(storage._sessionStorage.get('key13'));



export {}