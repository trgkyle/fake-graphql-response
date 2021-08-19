const { ApolloServer } = require('apollo-server')
var { typeDefs } = require('./types')

const mocks = {
  String: () => 'Example Data',
  DateTime: () => {
    return new Date()
  },
  Date: () => {
    return new Date()
  },
  SystemQuery: () => {
    return {
      info: {
        setup: false,
        __typename: 'SystemInfo',
      },
      __typename: 'SystemQuery',
    }
  },
  isSystem: () => true,
  Upload: () => 'Upload',
  Group: () => {
    return {
      id: '123',
      name: '123',
      isSystem: true,
      permissions: ['manage:system'],
    }
  },
}

const server = new ApolloServer({ typeDefs, mocks })

server.listen({ port: 8888 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
