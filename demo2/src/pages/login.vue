<template>
  <div class="login">
    <img src="@/assets/lalala.jpg" alt class="logo" />
    <el-form
      :model="loginForm"
      status-icon
      :rules="loginRule"
      ref="loginForm"
      label-width="100px"
      class="demo-ruleForm"
      v-loading="loading"
    >
      <el-form-item label="账号" prop="cellphone">
        <el-input 
        type="text"
        :clearable="true"
        @change="clearError('loginForm')"
        v-model="loginForm.cellphone"
        auto-complete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input 
        type="password" 
        v-model="loginForm.password" 
        autocomplete="off"
        :clearable="true"
        @change="clearError('loginForm')"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { loginTag } from "@/graphql/login.js";
import { onLogin } from "@/vue-apollo.js";
export default {

   data() {
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.showError) {
          callback(new Error("用户名或密码错误"));
        } else {
          callback();
        }
      }
    };
    const validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.showError) {
          callback(new Error("用户名或密码错误"));
        } else {
          callback();
        }
      }
    };
    return {
      loading: false,
      showError: false,
      loginForm: {
        cellphone: "",
        password: ""
      },
      loginRule: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        cellphone: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  methods: {
    async submitForm(formName) {
      try {
        const valid = await this.$refs[formName].validate();
        if (valid) {
          this.loading = true;
          const client = this.$apolloProvider.defaultClient;

          const result = await client.mutate({
            fetchPolicy: "no-cache",
            fetchResults: true,
            mutation: loginTag,
            variables: {
              input: this.loginForm
            }
          });

          const { token, error } = result.data.createAuthUser;

          if (error && !token) {
            this.loading = false;
            this.showError = true;
            this.loginError = "用户名或密码错误";
            await this.$refs[formName].validate();
          } else {
            this.loading = false;
            await onLogin(client, token);
             this.$router.push({ name: "home" });
            console.log("ok")
          }
        }
      } catch (e) {
        if (webpackHotUpdate) {
          console.log(e);
        }
      }
    },

    clearError(formName) {
      if (this.showError) {
        this.showError = false;
        this.loginError = "";
        this.$refs[formName].validate();
      }
    },

    resetForm(formName) {
      this.clearError(formName);
      this.$refs[formName].resetFields();
    }
  }
  };
</script>

<style lang="scss" scoped>
.login {
  margin: 100px auto;
  width: 400px;
  height: 400px;
}
.logo {
  width: 200px;
  height: 200px;
}
</style>
