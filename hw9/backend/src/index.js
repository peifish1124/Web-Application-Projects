require('dotenv-defaults').config();
import mongoose from 'mongoose'
import { GraphQLServer, PubSub } from 'graphql-yoga'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'

if (!process.env.MONGO_URL) {
  console.error('Missing MONGO_URL!!!')
  process.exit(1)
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

// new in HW7
const pubsub = new PubSub()
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription
  },
  context: {
    db,
    pubsub
  }
})


db.once('open', () => {
  console.log('MongoDB connected!')

  server.start({ port: process.env.PORT | 4000 }, () => {
    console.log(`The server is up on port ${process.env.PORT | 4000}!`)
  })
})


