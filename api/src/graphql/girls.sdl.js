export const schema = gql`
  type Girl {
    id: String!
    name: String!
  }

  type Query {
    girls: [Girl!]! @requireAuth
    girl(id: String!): Girl @requireAuth
  }

  input CreateGirlInput {
    name: String!
  }

  input UpdateGirlInput {
    name: String
  }

  type Mutation {
    createGirl(input: CreateGirlInput!): Girl! @requireAuth
    updateGirl(id: String!, input: UpdateGirlInput!): Girl! @requireAuth
    deleteGirl(id: String!): Girl! @requireAuth
  }
`
