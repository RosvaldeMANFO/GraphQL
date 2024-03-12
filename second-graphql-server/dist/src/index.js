import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { TrackAPI } from "./datasources/TrackAPI";
import { typeDefs } from "./schema";
import { resolvers } from "./resolver";
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
        const cache = server.cache;
        return {
            dataSources: {
                trackAPI: new TrackAPI({ cache })
            }
        };
    }
});
