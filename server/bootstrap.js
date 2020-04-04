require('dotenv').config();

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');

const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening for requests at port 4000');
});