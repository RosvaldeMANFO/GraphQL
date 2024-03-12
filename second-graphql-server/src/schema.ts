import gql from "graphql-tag";

export const typeDefs = gql`
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
  }
  type Author {
    id: ID!
    name: String!
    photo: String
  }
  
  type Film {
    id: ID!
    title: String!
    people: [People!]!
  }
  type People {
    id: ID!
    eye_color: String!
    films: [Film!]!
  }

  type Query {
    getTracks: [Track!]!
    getFilms: [Film!]!
    getPeople: [People!]!
  }
`