export const schema = gql`
  type Dog {
    id: String!
    name: String!
  }

  type Query {
    dogs: [Dog!]! @requireAuth
    dog(id: String!): Dog @requireAuth
  }

  input CreateDogInput {
    name: String!
  }

  input UpdateDogInput {
    name: String
  }

  type Mutation {
    createDog(input: CreateDogInput!): Dog! @requireAuth
    updateDog(id: String!, input: UpdateDogInput!): Dog! @requireAuth
    deleteDog(id: String!): Dog! @requireAuth
  }
`
