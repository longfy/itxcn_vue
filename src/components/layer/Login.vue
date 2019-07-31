<template>
  <el-dialog
    title="登录"
    :visible.sync="visible"
    @close="$emit('update:showLogin', false)"
    :modal-append-to-body="false"
    center
    width="520px"
  >
    <el-form :model="form" ref="form" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="userName">
        <el-col :span="20">
          <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-col :span="20">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="验证码" prop="verify">
        <el-col :span="10">
          <el-input v-model="form.verify" placeholder="验证码"></el-input>
        </el-col>
        <el-col :span="9" :offset="1">
          <div ref="verifyContainer" id="verifyContainer" class="verify" title="点击刷新"></div>
        </el-col>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="_cancel">取 消</el-button>
      <el-button type="primary" @click="_submit('form')">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import Vue from "vue";
import {
  Dialog,
  Form,
  Col,
  Input,
  Button,
  FormItem,
  Message
} from "element-ui";
import { login } from "@/api";
import verify from "@/utils/verify";
Vue.use(Dialog)
  .use(Form)
  .use(Col)
  .use(Input)
  .use(Button)
  .use(FormItem)
  .use(Message);
export default {
  data() {
    var verifyCode = (rule, value, callback) => {
      if (!this.newVerify.validate(value)) {
        callback(new Error("验证码输入有误！"));
      } else {
        callback();
      }
    };
    return {
      visible: this.showLogin,
      newVerify: null,
      form: {
        userName: "",
        password: "",
        verify: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        verify: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { validator: verifyCode, trigger: "blur" }
        ]
      }
    };
  },
  props: {
    showLogin: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.newVerify = new verify({ id: "verifyContainer" });
    });
  },
  watch: {
    showLogin() {
      this.visible = this.showLogin;
    }
  },
  methods: {
    _submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          login({
            userName: this.form.userName,
            password: this.form.password
          }).then(res => {
            if (res.status) {
              Message({
                message: res.msg,
                type: "success"
              });
              this.$emit("login", res);
              this.$emit("update:showLogin", false);
            } else {
              Message.error(res.msg);
            }
          });
        }
      });
    },
    _cancel() {
      this.$emit("update:showLogin", false);
    }
  }
};
</script>

<style lang="less" scoped>
.verify {
  height: 40px;
  border-radius: 3px;
  overflow: hidden;
}
</style>
