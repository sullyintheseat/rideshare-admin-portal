import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/Entry'
import Main from '@/components/secure/Main'
import Metrics from '@/components/secure/Metrics'
import Manager from '@/components/secure/Manager'
import Contests from '@/components/secure/Contests'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entry',
      component: Entry
    },
    {
      path: '/admin',
      name: 'Main',
      component: Main
    },
    {
      path: '/admin/metrics',
      name: 'Metrics',
      component: Metrics
    },
    {
      path: '/admin/contests',
      name: 'Contests',
      component: Contests
    },
    {
      path: '/admin/manager',
      name: 'Manager',
      component: Manager
    }
  ]
})
