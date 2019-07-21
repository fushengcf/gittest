<template>
  <!-- <apollo-query :query="orderFormQuery">
    <template slot-scope="{ result: { loading, error, data } }">
      <div v-loading="loading">
        <el-alert v-if="error" title="加载数据失败" type="error" description="请返回重试或刷新页面" show-icon /> -->
        <div style="margin-top:30px;" v-if="data">
          在这里重新使用el-data-table生成列表
          <el-data-table v-bind="tableConfig" ref="dataTable">
            <el-table-column slot="insertedAt" label="订单日期">
              <span slot-scope="{ row }">{{ row.insertedAt }}</span>
            </el-table-column>

            <el-table-column slot="user" label="用户名称">
              <span slot-scope="{ row }">{{ row.user && row.user.name }}</span>
            </el-table-column>

            <el-table-column slot="good" label="商品名称">
              <span slot-scope="{ row }">{{ row.good && row.good.name }}</span>
            </el-table-column>

            <el-table-column label="收件地址">
              <span slot-scope="scope">
                {{
                `${scope.row.address.province}-${scope.row.address.city}-${
                scope.row.address.distinct
                }-${scope.row.address.detail}`
                }}
              </span>
            </el-table-column>

            <el-table-column slot="good" label="购买数量">
              <span slot-scope="{ row }">{{ row.good && row.good.name }}</span>
            </el-table-column>

            <el-table-column slot="good" label="总金额">
              <span slot-scope="{ row }">{{ row.good && row.good.name }}</span>
            </el-table-column>
          </el-data-table>
        </div>
      <!-- </div>
    </template>
  </apollo-query> -->
</template>

<script>
import tableConfig from "@/tables/home";
export default {
  data() {
    return {
      data:{},
      tableConfig
    };
  },
  created() {
    console.log(tableConfig);
  }
};
</script>
