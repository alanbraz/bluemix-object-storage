# bluemix-object-storage
[![npm version](https://badge.fury.io/js/bluemix-object-storage.svg)](https://badge.fury.io/js/bluemix-object-storage)
[![GitHub version](https://badge.fury.io/gh/chyld%2Fbluemix-object-storage.svg)](https://badge.fury.io/gh/chyld%2Fbluemix-object-storage)


## Description
Manages the accounts, containers, and objects for the IBM Bluemix Object Storage service.


## Install
```sh
$ npm install bluemix-object-storage --save
```


## Usage
```js
var ObjectStorage = require('bluemix-object-storage');
var os = new ObjectStorage('user_id', 'password', 'project_id');
os.list('container_name').then(function(files){
  console.log(files);
});
```


## Access Points
- https://dal.objectstorage.open.softlayer.com
- https://lon.objectstorage.open.softlayer.com


## API
#### create
#### list
#### unlock
#### upload


## License
MIT © [Chyld Medford](https://github.com/chyld)
