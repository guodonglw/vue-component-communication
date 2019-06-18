import Vue from 'vue'
import Router from 'vue-router'
import Father from '../views/home/father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Father',
      component: Father
    }
  ]
})
