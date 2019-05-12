<template>
  <header class="header">
    <div class="container clearfix">
      <h1 class="logo">
        <a href="/" title="IT菜鸟—IT菜鸟学习教程平台">IT小菜鸟</a>
      </h1>
      <ul class="nav" v-if="navList.length">
        <li v-for="(item, index) in navList" :key="index">
          <a :href="item.url">{{ item.name }}</a>
          <dl v-if="item.children">
            <dd v-for="(item, index) in item.children" :key="index">
              <a :href="item.url">{{ item.name }}</a>
            </dd>
          </dl>
        </li>
      </ul>
      <div class="login-info" v-if="checkLogin">
        <span>{{ userName }}</span><img src="../assets/images/user.jpg" alt=""/>
        <ul class="sub-menu">
            <li><a href="/createArticle">发布文章</a></li>
            <li><a>个人信息</a></li>
            <li><a>我的收藏</a></li>
            <li><a v-on:click="_logout">退出</a></li>
        </ul>
      </div>
      <div class="signup" v-if="!checkLogin">
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
import { getNavMenu, checkLogin, logout } from '../utils/api.js'
import Login from './Login'
import Register from './Register'
export default {
  name: 'Header',
  data(){
    return {
      navList: [],
      showLogin: false,
      showRegister: false,
      checkLogin: false,
      userName: '透心凉℃'
    }
	},
  components: {
    Login, Register
  },
	beforeMount(){
		getNavMenu()
		.then(res => {
				this.navList = res
    }, err => {
        console.log(err);
		})
		checkLogin()
		.then(res => {
			this.checkLogin = res
		}, err => {
			console.log(err)
		})
	},
	methods: {
		_login(checkLogin){
			this.checkLogin = checkLogin
		},
		_logout(){
			logout()
			.then(res => {
				if(res.status) {
					this.$message({
						message: res.msg,
						type: 'success'
					});
					this.checkLogin = false
				}
			}, err => {
				console.log(err)
			})
		}
	}
}
</script>

<style scoped lang="scss" scoped>
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
}
.header .logo {
	float: left;
	width: 200px;
	background: url('../assets/images/logo.png') no-repeat 0 50%;
	height: 52px;
	background-size: auto 30px;
	overflow: hidden;
	line-height: 208px;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	margin: 0;
}
.header .logo a {
	height: 52px;
	display: block;
	color: #fff;
	overflow: hidden;
}
.header .nav {
	position: relative;
	left: 0;
	display: block;
	float: left;
	margin: 0 10px 0 0;
	font-size: 14px;
}
.header .nav li {
	position: relative;
	float: left;
	margin-right: 1px;
}
.header .nav li a {
	height: 52px;
	line-height: 52px;
	padding: 0 20px;
	color: #eeeeee;
	display: block;
}
.header .nav li.active a, .header .nav li:hover a {
	background-color: #404040;
}
.header .nav li dl {
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
}
.header .nav li:hover dl {
	display: block;
}
.header .nav li dl dd{
	margin: 0;
}
.header .nav li:hover dl a {
	display: block;
	padding: 0 20px;
	height: 32px;
	line-height: 32px;
	color: #eeeeee;
}
.header .nav li:hover dl a:hover {
	background: #56A856;
}
.header .signup {
	margin: 0 0 0 10px;
	color: #fff;
	position: relative;
	height: 52px;
	font-size: 14px;
	float: right;
}
.signup-btn{
	padding: 10px 0;
}
.signup-btn .ant-btn{
	margin-left: 10px;
}
.login-info{
	float: right;
	padding: 12px 0;
	// height: 52px;
	line-height: 28px;
	color: white;
	position: relative;
}
.login-info span,
.login-info img{
	float: left;
}
.login-info span{
	margin-right: 8px;
}
.login-info img{
	border-radius: 50%;
}
.login-info .sub-menu{
	position: absolute;
	width: 120px;
	top: 80px;
	right: 0;
	background: white;
	box-shadow: rgba(0,0,0,0.5) 0 0 3px;
	border-radius: 0 0 3px 3px;
	overflow: hidden;
	opacity: 0;
	visibility: hidden;
	transition: all .3s ease-in-out;
}
.login-info:hover .sub-menu{
	top: 100%;
	opacity: 1;
	visibility: visible;
}
.login-info .sub-menu a{
	display: block;
	padding: 3px 10px;
	color: #666;
	cursor: pointer;
}
.login-info .sub-menu li~li{
	border-top: #eee 1px solid;
}
.login-info .sub-menu a:hover{
	background-color: #56A856;
	border-color: #56A856;
	color: white;
}
</style>
