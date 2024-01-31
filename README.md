# storage-lib

Encapsulate localStorage and sessionStorage into the same API and extension API for better utilization.

## Install

```
 npm install @ys/storage -S
```

## Usage

```ts
 import { _localStorage, _sessionStorage } from '@ys/storage'
 import storage from '@ys/storage'
 
 // localStorage
 storage._localStorage.set('key1', {a: 1, b: 2});
 _localStorage.get('key1')
 
 // sessionStorage
 storage._sessionStorage.set('key2', [{a: 1, b: 2}]);
 
```

## API

#### set(key, val)

set storage with key and val

#### get(key)

get storage with key

#### has(key)

determine storage has the key

#### remove(key)

remove storage with key

#### clear()

clear all storages

#### getAll()

get all the storages

#### forEach(callback)

forEach the storages and call the callback function with each storage
