const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

//connect to mlab database
//replace <dbuser>:<password> with user associated with db and password
mongoose.connect('mongodb://Matt:abc123@ds145926.mlab.com:45926/gql-ninja')
mongoose.connection.once('open', ()=>{
    console.log('Connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, ()=>{
    console.log('now listening for requests on port 4000')
})