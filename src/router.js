import Vue from 'vue';
import Router from 'vue-router';
import Beers from '@/views/Beers'; //@ references src folder
import MoreInfo from '@/views/MoreInfo'

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/beers',
      name: 'beers',
      component: Beers
    },
    {
      path: '/beers/moreinfo',
      name: 'moreInfo',
      component: MoreInfo,
      props: true
    }
  ]
});
