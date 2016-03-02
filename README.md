# bluemix-object-storage
![Bluemix Object Storage](images/os.png)

[![NPM](https://nodei.co/npm/bluemix-object-storage.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bluemix-object-storage/)

[![Build Status](https://travis-ci.org/chyld/bluemix-object-storage.svg?branch=master)](https://travis-ci.org/chyld/bluemix-object-storage)
[![npm](https://badge.fury.io/js/bluemix-object-storage.svg)](https://www.npmjs.com/package/bluemix-object-storage)
[![GitHub](https://img.shields.io/badge/github-code-blue.svg)](https://github.com/chyld/bluemix-object-storage)
[![OpenStack](https://img.shields.io/badge/openstack-docs-orange.svg)](http://developer.openstack.org/api-ref-objectstorage-v1.html)


## Description
Easily manage the accounts, containers, and objects for the IBM Bluemix Object Storage service.


## Install
```sh
$ npm install bluemix-object-storage --save
```


## Usage
```js
var ObjectStorage = require('bluemix-object-storage');
var os = new ObjectStorage('user_id', 'password', 'project_id', 'access_point_url');

os.create('container_name')
.then(function(){
  return os.unlock('container_name');
})
.then(function(){
  return os.upload('container_name', 'filename.jpg', 'image/jpeg', file_buffer, files_size);
})
.then(function(){
  return os.list('container_name');
})
.then(function(files){
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


## Test
```sh
$ git clone https://github.com/chyld/bluemix-object-storage
$ cd bluemix-object-storage
$ npm install
$ npm test
```


## License
MIT © [Chyld Medford](https://github.com/chyld)
