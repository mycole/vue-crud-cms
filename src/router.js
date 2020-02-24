import Vue from 'vue'
import Router from 'vue-router'
import App from './routes/app/Index'
import appRoutes from './routes/app/router'
// import store from '@/store/'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      children: appRoutes,
    },
  ],
})

export default router
