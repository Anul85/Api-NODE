const redis = require ('redis');
const  bluebird = require("bluebird");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

return client.getAsync('foo').then(function(res) {
    console.log(res);
});

client.on ('connect',()=>console.log('redis client connected to server'));
client.on('ready', ()=>console.log('redis server is ready'));
client.on('error', (err)=>console.log('Error:',err));


client.set('name', 'John', (err)=>{
  if(err) console.error(err);
});


client.get('name', 'John', (err)=>{
  if(err) console.error(err);
});
