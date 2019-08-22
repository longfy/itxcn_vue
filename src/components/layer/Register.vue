<template>
  <el-dialog
    title="注册"
    :visible.sync="visible"
    @close="$emit('update:showRegister', false)"
    :modal-append-to-body="false"
    center
    width="520px"
  >
    <el-form :model="form" ref="form" :rules="rules" label-width="100px">
      <el-form-item label="姓名" prop="name">
        <el-col :span="20">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="用户名" prop="account">
        <el-col :span="20">
          <el-input v-model="form.account" placeholder="请输入用户名"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-col :span="20">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-col :span="10">
          <el-input v-model="form.code" placeholder="验证码"></el-input>
        </el-col>
        <el-col :span="9" :offset="1">
          <div ref="verifyContainer" id="verifyContainer" class="verify" title="点击刷新"></div>
        </el-col>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:showRegister', false)">取 消</el-button>
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
import { register } from "@/api";
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
      visible: this.showRegister,
      newVerify: null,
      form: {
        name: "",
        account: "",
        password: "",
        code: ""
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { validator: verifyCode, trigger: "blur" }
        ]
      }
    };
  },
  props: {
    showRegister: {
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
    showRegister() {
      this.visible = this.showRegister;
    }
  },
  methods: {
    _submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          register({
            name: this.form.name,
            account: this.form.account,
            password: this.form.password
          }).then(res => {
            if (res.status) {
              Message({
                message: res.msg,
                type: "success"
              });
              this.$emit("update:showRegister", false);
            } else {
              Message.error(res.msg);
            }
            this.newVerify.refresh();
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.verify {
  height: 40px;
  /* border: 1px solid #d9d9d9; */
  border-radius: 3px;
  overflow: hidden;
}
.vieify img {
  width: 100px;
  height: 42px;
}
</style>
