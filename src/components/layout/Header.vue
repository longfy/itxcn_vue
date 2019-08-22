<template>
  <header class="header">
    <div class="container clearfix">
      <h1 class="logo">
        <a href="/" title="IT菜鸟—IT菜鸟学习教程平台">IT小菜鸟</a>
      </h1>
      <ul class="nav" v-if="navList.length">
        <li v-for="(item, index) in navList" :key="index">
          <router-link :to="item.url">{{ item.name }}</router-link>
          <dl v-if="item.children">
            <dd v-for="(item, index) in item.children" :key="index">
              <router-link :to="item.url">{{ item.name }}</router-link>
            </dd>
          </dl>
        </li>
      </ul>
      <div class="login-info" v-if="userInfo.id">
        <span>{{ userInfo.name }}</span>
        <img src="@/assets/images/user.jpg" alt />
        <ul class="sub-menu">
          <li v-if="false">
            <router-link to="/createArticle">发布文章</router-link>
          </li>
          <li>
            <a>个人信息</a>
          </li>
          <li>
            <a>我的收藏</a>
          </li>
          <li>
            <a v-on:click="_logout">退出</a>
          </li>
        </ul>
      </div>
      <div class="signup" v-if="!userInfo.id">
        <div class="signup-btn">
          <el-button size="small" v-on:click="showLogin = true">登录</el-button>
          <el-button size="small" v-on:click="showRegister = true">注册</el-button>
        </div>
      </div>
      <Login v-if="showLogin" :showLogin.sync="showLogin" @login="_login"></Login>
      <Register v-if="showRegister" :showRegister.sync="showRegister"></Register>
    </div>
  </header>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import { Message } from "element-ui";
import { getNavMenu, checkLogin, logout } from "@/api";
import Login from "@/components/layer/Login";
import Register from "@/components/layer/Register";
Vue.use(Message);
export default {
  data() {
    return {
      navList: [],
      showLogin: false,
      showRegister: false
    };
  },
  components: {
    Login,
    Register
  },
  computed: {
    ...mapState("user", ["userInfo"])
  },
  beforeMount() {
    getNavMenu().then(res => (this.navList = res));
  },
  methods: {
    _login(res) {
      let { userInfo } = res;
      this.util.setStore(
        "userInfo", userInfo,
        "user/changeUserState"
      );
    },
    _logout() {
      logout().then(
        res => {
          if (res.status) {
            Message({
              message: res.msg,
              type: "success"
            });
            this.util.setStore("userInfo", {}, "user/changeUserState");
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style scoped lang="less" scoped>
/**header**/

.header {
  position: relative;
  // top: 0;
  width: 100%;
  z-index: 999;
  background: #222222;
  filter: alpha(Opacity=90);
  -moz-opacity: 0.9;
  opacity: 0.95;
  .logo {
    float: left;
    width: 200px;
    background: url("../../assets/images/logo.png") no-repeat 0 50%;
    height: 52px;
    background-size: auto 30px;
    overflow: hidden;
    line-height: 208px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    a {
      height: 52px;
      display: block;
      color: #fff;
      overflow: hidden;
    }
  }
  .nav {
    position: relative;
    left: 0;
    display: block;
    float: left;
    margin: 0 10px 0 0;
    font-size: 14px;
    li {
      position: relative;
      float: left;
      margin-right: 1px;
      a {
        height: 52px;
        line-height: 52px;
        padding: 0 20px;
        color: #eeeeee;
        display: block;
      }
      dl {
        padding-bottom: 0;
        text-align: left;
        position: absolute;
        top: 52px;
        left: 0;
        min-width: 120px;
        z-index: 10;
        display: none;
        font-size: 12px;
        background-color: #404040;
        margin: 0;
        dd {
          margin: 0;
        }
      }
      &.active {
        a {
          background-color: #404040;
        }
      }
      &:hover {
        a {
          background-color: #404040;
        }
        dl {
          display: block;
          a {
            display: block;
            padding: 0 20px;
            height: 32px;
            line-height: 32px;
            color: #eeeeee;
            &:hover {
              background: #56a856;
            }
          }
        }
      }
    }
  }
  .signup {
    margin: 0 0 0 10px;
    color: #fff;
    position: relative;
    height: 52px;
    font-size: 14px;
    float: right;
    .signup-btn {
      padding: 10px 0;
      .ant-btn {
        margin-left: 10px;
      }
    }
  }
  .login-info {
    float: right;
    padding: 12px 0;
    // height: 52px;
    line-height: 28px;
    color: white;
    position: relative;
    &:hover {
      .sub-menu {
        top: 100%;
        opacity: 1;
        visibility: visible;
      }
    }
    span {
      float: left;
      margin-right: 8px;
    }
    img {
      float: left;
      border-radius: 50%;
    }
    .sub-menu {
      position: absolute;
      width: 120px;
      top: 80px;
      right: 0;
      background: white;
      box-shadow: rgba(0, 0, 0, 0.5) 0 0 3px;
      border-radius: 0 0 3px 3px;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;

      li ~ li {
        border-top: #eee 1px solid;
      }
      a {
        display: block;
        padding: 3px 10px;
        color: #666;
        cursor: pointer;
        &:hover {
          background-color: #56a856;
          border-color: #56a856;
          color: white;
        }
      }
    }
  }
}
</style>
