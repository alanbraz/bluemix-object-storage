var expect = require('chai').expect;
var nock = require('nock');
var fs = require('fs');
var ObjectStorage = require('../lib');

describe('ObjectStorage', function(){
  var os;

  beforeEach(function(){
      os = new ObjectStorage('a', 'b', 'c');
  });

  afterEach(function(){
    nock.cleanAll();
  });

  describe('constructor', function(){
    it('should create an object of type ObjectStorage', function(){
      var os1 = new ObjectStorage('d', 'e', 'f');
      expect(os1.userId).to.equal('d');
      expect(os1.password).to.equal('e');
      expect(os1.projectId).to.equal('f');
      expect(os1.endpoint).to.equal('https://dal.objectstorage.open.softlayer.com/v1/AUTH_f');
    });
  });

  describe('#create', function(){
    it('should create a container', function(done){
      nock('https://dal.objectstorage.open.softlayer.com').put('/v1/AUTH_c/bucket').reply(201);
      os.create('bucket').then(function(data){
        expect(data.response.statusCode).to.equal(201);
        done();
      });
    });
  });

    describe('#list', function(){
    it('should return a list of files in a container', function(done){
      nock('https://dal.objectstorage.open.softlayer.com').get('/v1/AUTH_c/bucket').reply(200, [3, 5, 7]);
      os.list('bucket').then(function(data){
        expect(data.response.statusCode).to.equal(200);
        expect(data.body).to.have.length(3);
        done();
      });
    });
  });

    describe('#unlock', function(){
    it('should make a container read only to the public', function(done){
      nock('https://dal.objectstorage.open.softlayer.com').post('/v1/AUTH_c/bucket').reply(204);
      os.unlock('bucket').then(function(data){
        expect(data.response.statusCode).to.equal(204);
        done();
      });
    });
  });

    describe('#upload', function(){
    it('should upload a file to the container', function(done){
      var buffer = fs.readFileSync('./test/fixtures/pup.jpg');
      nock('https://dal.objectstorage.open.softlayer.com').put('/v1/AUTH_c/bucket/pup.jpg').reply(201);
      os.upload('bucket', 'pup.jpg', 'image/jpeg', buffer, 32796).then(function(data){
        expect(data.response.statusCode).to.equal(201);
        done();
      });
    });
  });
});
