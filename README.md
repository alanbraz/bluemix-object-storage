# bluemix-object-storage
[![NPM](https://nodei.co/npm/bluemix-object-storage.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bluemix-object-storage/)

[![npm](https://badge.fury.io/js/bluemix-object-storage.svg)](https://www.npmjs.com/package/bluemix-object-storage)
[![GitHub](https://img.shields.io/badge/source-code-blue.svg)](https://github.com/chyld/bluemix-object-storage)


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
