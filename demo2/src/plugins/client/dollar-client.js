class CrudToGraphqlClient {
  constructor(vm) {
    this.vm = vm;
    this.client = vm.$apolloProvider.defaultClient;
  }

  get(tag, params) {
    return this.client.query({
      fetchPolicy: "network-only",
      fetchResults: true,
      query: tag,
      variables: params
    });
  }

  search(tag, params) {
    return this.client.query({
      fetchPolicy: "network-only",
      fetchResults: true,
      query: tag,
      variables: {
        filter: params
      }
    });
  }

  create(tag, params) {
    return this.client.mutate({
      fetchPolicy: "no-cache",
      fetchResults: true,
      mutation: tag,
      variables: {
        input: params
      }
    });
  }

  update(tag, id, params) {
    return this.client.mutate({
      fetchPolicy: "no-cache",
      fetchResults: true,
      mutation: tag,
      variables: {
        id,
        input: params
      }
    });
  }

  delete(tag, id) {
    return this.client.mutate({
      fetchPolicy: "no-cache",
      fetchResults: true,
      mutation: tag,
      variables: {
        id
      }
    });
  }

  // query(){
  //   return this.client.query({
  //     fetchPolicy: "network-only",
  //     fetchResults: true,
  //     query: tag,
  //   });
  // }
}

export default function install(Vue) {
  if (Vue.prototype.$dataClient) return;

  Object.defineProperty(Vue.prototype, "$dataClient", {
    get() {
      if (!this.$_crud_to_graphql_apollo) {
        this.$_crud_to_graphql_apollo = new CrudToGraphqlClient(this);
      }
      return this.$_crud_to_graphql_apollo;
    }
  });
}
