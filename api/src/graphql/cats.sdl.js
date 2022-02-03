export const schema = gql`
  type Cat {
    id: String!
    name: String!
  }

  type Query {
    cats: [Cat!]! @requireAuth
    cat(id: String!): Cat @requireAuth
  }

  input CreateCatInput {
    name: String!
  }

  input UpdateCatInput {
    name: String
  }

  type Mutation {
    createCat(input: CreateCatInput!): Cat! @requireAuth
    updateCat(id: String!, input: UpdateCatInput!): Cat! @requireAuth
    deleteCat(id: String!): Cat! @requireAuth
  }
`
