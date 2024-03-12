import gql from 'graphql-tag';
export const typeDefs = gql `
  type Doctor {
    name: String
    speciality: SPECIALITY
  }
 
  type Query {
    doctors(specialities: [SPECIALITY!]): [Doctor]
  }
 
  enum SPECIALITY {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;
