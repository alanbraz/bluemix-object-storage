import Request from './request';

class ObjectStorage {
  constructor(userId, password, projectId, container, accessPoint = 'https://dal.objectstorage.open.softlayer.com'){
    this.credentials = require('../config/credentials.json');
    this.userId = userId;
    this.password = password;
    this.projectId = projectId;
    this.container = container;
    this.endpoint = `${accessPoint}/v1/AUTH_${projectId}`;
    this.token = null;
    this.url = `${this.endpoint}/${this.container}`;
  }
  createContainer(){
    const url = this.url;
    const method = 'put';
    const headers = {'x-auth-token': this.token};
    return Request({url, method, headers, json: true}, this).then(() => null);
  }
  listContainerFiles(){
    const url = this.url;
    const method = 'get';
    const headers = {'x-auth-token': this.token};
    return Request({url, method, headers, json: true}, this).then(({response, body}) => {
      return typeof body === 'string' ? [] : body.map(file => `${this.url}/${file.name}`);
    });
  }
  setContainerPublicReadable(){
    const url = this.url;
    const method = 'post';
    const headers = {'x-auth-token': this.token, 'x-container-read': '.r:*, .rlistings'};
    return Request({url, method, headers, json: true}, this).then(() => null);
  }
  uploadFileToContainer(filename, mimetype, buffer, size){
    const url = `${this.url}/${filename}`;
    const method = 'put';
    const headers = {'x-auth-token': this.token, 'content_type': mimetype, 'content-length': size};
    return Request({url, method, headers, body: buffer}, this).then(() => `${this.url}/${filename}`);
  }
}

module.exports = ObjectStorage;
