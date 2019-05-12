<template>
  <div id="app">
    <Header />
    <router-view></router-view>
		<div style="margin-top: 20px;">
			<Footer />
		</div>    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header, Footer
  }
}
</script>

<style>
body {
	background: #f8f8f8 !important;
	overflow-x: hidden;
}
body, th, td, input, select, textarea, button {
	font-size: 12px;
	line-height: 20px;
	font-family: "Hiragino Sans GB", "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
	color: #666;
}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, textarea, p, blockquote, th, td, input, select, textarea, button {
	margin: 0;
	padding: 0;
}
fieldset, img {
	border: 0 none;
}
dl, ul, ol, menu, li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after, q:before, q:after {
	content: '';
	content: none;
}
input, select, textarea, button {
	vertical-align: middle;
}
button {
	border: 0 none;
	background-color: transparent;
	cursor: pointer;
}
a {
	color: #666;
	text-decoration: none;
	outline: none;
}
a:active, a:hover {
	color: #4eae30;
	text-decoration: none;
}
address, caption, cite, code, dfn, em, var {
	font-style: normal;
	font-weight: normal;
}
caption {
	display: none;
}
table {
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	table-layout: fixed;
}
img {
	max-width: 100%;
	vertical-align: middle;
}
.container {
	max-width: 1200px;
	margin: 0 auto;
	position: relative;
}
.main{
	padding-top: 52px;
}
.clear {
	clear: both;
}
.clearfix:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: ".";
	clear: both;
	height: 0;
	overflow: hidden;
}
.clearfix {
	*zoom: 1;
}
.hide {
	display: none;
}
</style>
