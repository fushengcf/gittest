<template>
  <div class="search">
    <div class="search-item" v-if="$props.type === 'input'">
      <el-input
        v-model="search"
        clearable
        @change="setAndPassOut"
        :placeholder="`请输入${$props.tip}`"
      />
    </div>
    <div class="search-item" v-if="$props.type === 'select'">
      <el-select
        v-model="search"
        filterable
        clearable
        @change="setAndPassOut"
        :placeholder="`请选择${$props.tip}`"
      >
        <el-option
          v-for="item in data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="search-item" v-if="$props.type === 'radio'">
      <el-radio-group v-model="search" @change="setAndPassOut">
        <el-radio :label="''">全部</el-radio>
        <el-radio :label="true">{{ this.$props.active }}</el-radio>
        <el-radio :label="false">{{ this.$props.inactive }}</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-item",

  props: {
    /*
    传入值
    */
    value: {
      type: Object
    },
    /*
    查询状态
    */
    condition: {
      type: String
    },
    /*
    外部数据
    */
    source: {
      type: Array,
      default: () => []
    },
    /*
    查询框类型
    */
    type: {
      type: String,
      default: "input"
    },
    /*
    提示语关键词
    */
    tip: {
      type: String,
      default: ""
    },
    /*
    单选框关键词2
    */
    active: {
      type: String,
      default: "是"
    },
    /*
    单选框关键词3
    */
    inactive: {
      type: String,
      default: "否"
    },
    /*
    是否对外来数据进行处理
    */
    handleData: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      search: "",
      data: this.dataFormat(this.$props.source)
    };
  },

  watch: {
    value: function(newvalue) {
      if (newvalue && newvalue instanceof Object) {
        this.search = newvalue.value;
      } else {
        this.search = newvalue;
      }
    }
  },

  methods: {
    setAndPassOut(newValue) {
      if (newValue) {
        if (
          (newValue instanceof String && newValue.length > 0) ||
          !(newValue instanceof String)
        ) {
          this.$emit("input", {
            cond: this.condition,
            value: newValue
          });
        }
      } else if (newValue === false) {
        this.$emit("input", {
          cond: this.condition,
          value: newValue
        });
      } else {
        this.$emit("input", null);
      }
    },
    dataFormat(data) {
      if (this.$props.handleData) {
        return data.map(s => ({ label: s.name, value: s.id }));
      }
      return data;
    }
  }
};
</script>
<style lang="scss" scoped>
.search-item {
  margin-right: 10px;
}
</style>
