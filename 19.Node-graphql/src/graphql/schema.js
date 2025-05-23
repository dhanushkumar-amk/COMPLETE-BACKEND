
const { gql } = require('graphql-tag')


const typeDefs = gql `
    type  product {
        id : ID!
        title : String!
        category : String!
        price : Float!,
        inStock : Boolean
    }

    type query {
        products : [product!]!
        product(id : ID!) : product
    }
`

module.exports = typeDefs;
