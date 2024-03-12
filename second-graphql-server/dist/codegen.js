const config = {
    schema: './src/schema.ts',
    generates: {
        './src/types.ts': {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: './src/context#DataSourceContext',
                mappers: {
                    Track: './src/models#TrackModel',
                    Author: './src/models#AuthorModel',
                }
            }
        }
    }
};
export default config;
