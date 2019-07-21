import orderForm from "@/graphql/home.js"

const columns = [
    {
        prop: "insertedAt",
        label: "日期时间",
        width: "100px"
      },
      {
        prop: "user",
        label: "用户名称",
        slot:"user"
      },
      {
        prop: "good.name",
        label: "商品名称"
      },
      {
        prop: "address",
        label: "收件地址",
        slot:"address"
      },
      {
        prop: "number",
        label: "购买数量"
      },
      {
        prop: "amount",
        label: "总金额"
      },
]

export default {
    ...orderForm,
    dataPath:"orders",
    columns,
    hasNew:false,
    hasEdit:false,
    hasView:false,
    hasDelete:false,
    hasPagination:false,
    hasOperation:false

}