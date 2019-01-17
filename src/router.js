import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Intro from './components/Intro.vue'
import Valuer from './components/Valuer.vue'
import Media from './components/Media.vue'
import Experts from './components/Experts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'valuer',
      component: Valuer
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },{
      path: '/media',
      name: 'media',
      component: Media
    },{
      path: '/experts',
      name: 'experts',
      component: Experts
    }
  ]
})
