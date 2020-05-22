import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('../views/Cases'),
    meta: {
      title: '舆情列表'
    }
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result'),
    meta: {
      title: '舆情报结'
    }
  },
  {
    path: '/base_info',
    name: 'BaseInfo',
    component: () => import('../views/BaseInfo'),
    meta: {
      title: '舆情基本信息'
    }
  },
  {
    path: '/dispense',
    name: 'Dispense',
    component: () => import('../views/Dispense'),
    meta: {
      title: '批示交办'
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title
  next()
})

export default router
