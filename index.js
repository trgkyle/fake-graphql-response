const { ApolloServer } = require("apollo-server");
var { typeDefs } = require('./types');

const mocks = {
    String: () => 'Example Data',
    DateTime: () => {
      return new Date();
    },
    Date: () => {
        return new Date();
      },
    isSystem: () => true,
    Upload: () => 'Upload'
  };

  
const server = new ApolloServer({ typeDefs, mocks });

server.listen({port: 8888}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});