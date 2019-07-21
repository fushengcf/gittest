import gql from 'graphql-tag'

export const readAllTag = gql`
     query readAll(
    $filter: FilterOrderInput
    $order: [OrderInput]
    $pagination: PaginateInput
  ) {
    expressesCount {
      totalCount
    }
    addressesCount {
      totalCount
    }
    goodsCount {
      totalCount
    }
    ordersCount {
      totalCount
    }
    paymentsCount {
      totalCount
    }
    usersCount {
      totalCount
    }
    orders(filter: $filter, order: $order, pagination: $pagination) {
     id
      number
      status
      userId
      user {
        id
        name
      }
      insertedAt
      goodId
      good {
        id
        name
      }
      express {
        id
      }
      addressId
      address {
        id
        province
        distinct
        city
        detail
      }
      payment {
        id
        uniqueNumber
        status
        insertedAt
      }
      amount
    }
  }
`;


export default { readAllTag };
