Requirements:\
ElasticSearch\
NodeJS

Dataset for the project was taken from Kaggle and was in JSON format.
It is part of the repo.
(https://www.kaggle.com/hugodarwood/epirecipes?select=full_format_recipes.json)

I indexed the dataset using APIs of ElasticSearch on recipe ingredients and made a web app with NodeJS as backend. 
Each user ingredient input returned a set of recipes containing that ingredient from the dataset. 
Postman, a HTTP client was used to fire GET, POST, DELETE requests.

localhost:9200 is where elasticsearch is hosted.\
Running data.js and data2.js would index recipes dataset on elasticsearch and need to be run only once.\
Running index.js would launch search engine on localhost:3001\
Run:\
node data.js\
node data2.js\
node index.js
