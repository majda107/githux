import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Repositories from './views/Repositories.vue'
import Me from './views/Me.vue'
import RepoView from './views/RepoView.vue'
import GistsView from './views/GistsView.vue'


Vue.use(Router)

const linkActiveClass = 'my-link-active-class'
// Vue.material.router.linkActiveClass = linkActiveClass

export default new Router({
    routes: [
        {
            path: '/',
            // name: 'root',
            // component: Home,
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/repositories',
            name: 'repositories',
            component: Repositories
        },
        {
            path: '/repositories/:query', 
            name: 'repositories query',
            component: Repositories
        },
        {
            path: '/gists',
            name: 'gists',
            component: GistsView
        },
        {
            path: '/me',
            name: 'me',
            component: Me
        },
        {
            path: '/repositories/:owner/:repo',
            name: 'repo detail',
            component: RepoView
        }
    ],
    linkActiveClass
})