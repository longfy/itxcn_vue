import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

Vue.use(Router)

const baseRoute = [{
  path: '/',
  redirect: '/home',
}, {
  path: '/home',
  name: 'home',
  components: {
    default: () => import('@/views/home/Home'),
    header: Header,
    footer: Footer
  }
}, {
  path: '/about',
  name: 'about',
  components: {
    default: () => import('@/views/about/About'),
    header: Header,
    footer: Footer
  }
}];

const asyncRoute = [{
  path: '/createArticle',
  name: 'article',
  components: {
    default: () => import('@/components/Article'),
    header: Header,
    footer: Footer
  }
},{
  path: '*',
  name: 'page404',
  components: {
    default: () => import('@/views/404/404.vue'),
    header: Header,
    footer: Footer
  }
}];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...baseRoute, ...asyncRoute]
})

export default router