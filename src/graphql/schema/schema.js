const typeDefs = /* GraphQL */`
  type Email {
    email: String
  }

  enum Gender {
    MALE
    FEMALE
  }

  type Friend {
    id: ID
    firstName: String!
    lastName: String
    gender: Gender
    age: Int
    language: String
    emails: [Email]
  }

  type Alien {
    id: ID
    firstName: String
    lastName: String
    planet: String
  }

  input AlienInput {
    id: ID
    firstName: String
    lastName: String
    planet: String
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
    getFriends: [Friend]
    getOneFriend(id: ID!): Friend
    getAliens: [Alien]
    getOneAlien(id: ID!): Alien
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
  }
`;

export { typeDefs };
