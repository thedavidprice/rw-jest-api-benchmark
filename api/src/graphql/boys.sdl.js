export const schema = gql`
  type Boy {
    id: String!
    name: String!
  }

  type Query {
    boys: [Boy!]! @requireAuth
    boy(id: String!): Boy @requireAuth
  }

  input CreateBoyInput {
    name: String!
  }

  input UpdateBoyInput {
    name: String
  }

  type Mutation {
    createBoy(input: CreateBoyInput!): Boy! @requireAuth
    updateBoy(id: String!, input: UpdateBoyInput!): Boy! @requireAuth
    deleteBoy(id: String!): Boy! @requireAuth
  }
`
