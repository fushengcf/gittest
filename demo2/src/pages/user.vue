<template>
    <div>
     
       <div style="margin-top:30px;">
           用户列表
          <el-data-table v-bind="tableConfig" ref="dataTable">
            <el-table-column slot="users" label="用户编号">
              <span slot-scope="{ row }">{{ row.id }}</span>
            </el-table-column>

            <el-table-column slot="users" label="用户昵称">
              <span slot-scope="{ row }">{{ row.name }}</span>
            </el-table-column>

             <el-table-column slot="users" label="电话">
              <span slot-scope="{ row }">{{ row.cellphone }}</span>
            </el-table-column>

            <el-table-column slot="users" label="注册时间">
              <span slot-scope="{ row }">{{ row.insertedAt }}</span>
            </el-table-column>

          </el-data-table>
        </div> 
    </div>
</template>

<script>
import tableConfig from "@/tables/user";
export default {
    data(){
        return{
            data:{},
            tableConfig
        }
    }
}
</script>
