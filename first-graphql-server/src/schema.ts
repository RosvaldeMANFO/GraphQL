import gql from 'graphql-tag';

export const typeDefs = gql`
  type Doctor {
    name: String
    speciality: SPECIALITY
  }
 
  type Query {
    doctors(specialities: [SPECIALITY!]): [Doctor]
    add(number1: Int!, number2: Int!): Int
    subtract(number1: Int!, number2: Int!): Int
    multiply(number1: Int!, number2: Int!): Int
    divide(number1: Int!, number2: Int!): Float
    closestColor(hex: String!): String
  }
 
  enum SPECIALITY {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;