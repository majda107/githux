import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Repositories from './views/Repositories.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/repositories',
            name: 'repositories',
            component: Repositories
        }
    ]
})