import gql from 'graphql-tag'

export const readAllTag = gql`
   query readAll{
    users{
      id
      name
      cellphone
      avatar
      role
      insertedAt
      updatedAt
  }
}
`;

export default { readAllTag };