const { GraphQLServer } = require('graphql-yoga')
const { nexusPrisma } = require('nexus-plugin-prisma')
const { makeSchema } = require('@nexus/schema')
const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const cors = require('cors');
const types = require('./types')

const prisma = new PrismaClient();

const opts = {
  port: 4000,
  cors: {
    credentials: true,
    origin: "http://localhost:7777" // your frontend url.
  }
};

new GraphQLServer({
  schema: makeSchema({
    types,
    plugins: [nexusPrisma()],
    outputs: {
      schema: __dirname + '/../schema.graphql',
      typegen: __dirname + '/generated/nexus.ts',
    },
  }),
  //middlewares: [permissions],
  context: (request) => {
    return {
      ...request,
      prisma,
    }
  },
}).start(opts, () =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql-auth#using-the-graphql-api`,
  ),
)
