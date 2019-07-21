import gql from "graphql-tag"

export const loginTag = gql`
mutation login($input:CreateAuthUserInput!){
   createAuthUser(input: $input) {
      token
      user {
        id
        name
        cellphone
      }
      error {
        key
        message
      }
    }
}

`
