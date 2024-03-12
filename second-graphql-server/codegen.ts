import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/types.ts': {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: './context#DataSourceContext',
        mappers: {
          Track: './src/models#TrackModel',
          Author: './src/models#AuthorModel',
          People: './src/models#PeopleModel',
          Film: './src/models#FilmModel'
        }
      }
    }
  }
}

export default config