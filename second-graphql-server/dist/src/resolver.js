export const resolvers = {
    Query: {
        getTracks: (_, __, { dataSources }, ___) => {
            return dataSources.trackAPI.getTracks();
        }
    },
    Track: {
        author: (parent, _, { dataSources }, __) => {
            return dataSources.trackAPI.getAuthorBy(parent.author.id);
        }
    },
};
