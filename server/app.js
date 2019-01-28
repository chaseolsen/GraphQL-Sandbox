const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

// random comment testing branch

// importing GraphQL schema from schema/schema.js
const schema = require('./schema/schema');

const app = express();

// allow cross-origin requests
app.use(cors());


// connect to mlab database

// to prevent bots from crawling github and stealing PWs and having to create a .gitignore file, manually copy this to string below...

// User: chase
// PW: test123
mongoose.connect('mongodb://chase:test123@ds119273.mlab.com:19273/gql-sandbox', { useNewUrlParser: true });


mongoose.connection.once('open', () => {
  console.log('Connected to database');
});


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening for requests on port 4000');
});
