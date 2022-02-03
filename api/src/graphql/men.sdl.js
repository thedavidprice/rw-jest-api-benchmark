export const schema = gql`
  type Man {
    id: String!
    name: String!
  }

  type Query {
    men: [Man!]! @requireAuth
    man(id: String!): Man @requireAuth
  }

  input CreateManInput {
    name: String!
  }

  input UpdateManInput {
    name: String
  }

  type Mutation {
    createMan(input: CreateManInput!): Man! @requireAuth
    updateMan(id: String!, input: UpdateManInput!): Man! @requireAuth
    deleteMan(id: String!): Man! @requireAuth
  }
`
