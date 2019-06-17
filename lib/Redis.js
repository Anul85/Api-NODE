
 const redis = require ('redis');
 const  bluebird = require("bluebird");
 client = redis.createClient();



 bluebird.promisifyAll(redis.RedisClient.prototype);
 bluebird.promisifyAll(redis.Multi.prototype);



 return client.getAsync('foo').then(function(res) {
     console.log(res);
 });
