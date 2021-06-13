/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    contact(contactId: String!): Contact
    contacts(sort: String): [Contact]
  }

  type Mutation {
    createContact(contact: ContactInput!): Contact
    updateContact(contact: ContactInput!): Contact
    deleteContact(contact: ContactInput!): Boolean
  }

  type Contact {
    _id: ID!
    contactId: String,
    email: String
    firstName: String
    lastName: String
  }

  input ContactInput {
    contactId: String,
    email: String
    firstName: String
    lastName: String
  }
`;

export { typeDefs };
