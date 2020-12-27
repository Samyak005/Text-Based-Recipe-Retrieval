//require the Elasticsearch librray
const elasticsearch = require('elasticsearch');
// instantiate an Elasticsearch client
const client = new elasticsearch.Client({
   hosts: [ 'http://localhost:9200']
});

// require the array of recipes that was downloaded
const recipes = require('./recipes.json');
// declare an empty array called bulk
var bulk = [];
//loop through each recipe and create and push two objects into the array in each loop
//first object sends the index and type you will be saving the data as
//second object is the data you want to index
recipes.forEach(recipe =>{
   bulk.push({index:{ 
                 _index:'my_index', 
                 _type:"recipes_list",
             }          
         })
  bulk.push(recipe)
})

//perform bulk indexing of the data passed
client.bulk({body:bulk}, function( err, response  ){ 
         if( err ){ 
             console.log("Failed Bulk operation".red, err) 
         } else { 
             console.log("Successfully imported %s", recipes.length); 
         } 
});