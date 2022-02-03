export const schema = gql`
  type Woman {
    id: String!
    name: String!
  }

  type Query {
    women: [Woman!]! @requireAuth
    woman(id: String!): Woman @requireAuth
  }

  input CreateWomanInput {
    name: String!
  }

  input UpdateWomanInput {
    name: String
  }

  type Mutation {
    createWoman(input: CreateWomanInput!): Woman! @requireAuth
    updateWoman(id: String!, input: UpdateWomanInput!): Woman! @requireAuth
    deleteWoman(id: String!): Woman! @requireAuth
  }
`
