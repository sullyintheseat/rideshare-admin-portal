import Vue from 'vue';
import Router from 'vue-router';
import Entry from '@/components/Entry';
import Metrics from '@/components/secure/Metrics';
import Manager from '@/components/secure/Manager';
import Contests from '@/components/secure/Contests';
import Admin from '@/components/secure/Admin';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entry',
      component: Entry
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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
