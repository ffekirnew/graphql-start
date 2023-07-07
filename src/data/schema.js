import { makeExecutableSchema } from 'graphql-tools';
import resolver from './resolvers';

const typeDefs = `
  type Email {
    email: String
  }

  enum Gender {
    MALE
    FEMALE
  }

  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    emails: [Email]
  }

  input EmailInput {
    email: String
  }

  input FriendInput {
    id: ID
    firstName: String!
    lastName: String
    age: Int
    gender: Gender
    language: String
    emails: [EmailInput]
  }

  type Query {
    getFriend(id: ID): Friend
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolver });
export { schema };
