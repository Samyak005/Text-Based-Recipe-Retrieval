//require the Elasticsearch library
const elasticsearch = require('elasticsearch');
// instantiate an Elasticsearch client
const client = new elasticsearch.Client({
   hosts: [ 'http://localhost:9200']
});
// ping the client to be sure Elasticsearch is up
client.ping({
     requestTimeout: 30000,
 }, function(error) {
 // at this point, elastic search is down, please check your Elasticsearch service
     if (error) {
         console.error('Elasticsearch cluster is down!');
     } else {
         console.log('Everything is ok');
     }
 });
//#####################################################################

// create a new index called my_index. If the index has already been created, this function fails safely
client.indices.create({
      index: 'my_index'
  }, function(error, response, status) {
      if (error) {
          console.log("index already exists");
      } else {
          console.log("created a new index", response);
      }
});
//#####################################################################