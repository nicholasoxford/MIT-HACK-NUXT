import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _000644e8 = () => interopDefault(import('../pages/inventory.vue' /* webpackChunkName: "pages/inventory" */))
const _51a79be4 = () => interopDefault(import('../pages/page1.vue' /* webpackChunkName: "pages/page1" */))
const _74f2435e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inventory",
    component: _000644e8,
    name: "inventory"
  }, {
    path: "/page1",
    component: _51a79be4,
    name: "page1"
  }, {
    path: "/",
    component: _74f2435e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
