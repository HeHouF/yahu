import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import page1 from '@/components/page/page1'

import goods from '@/components/page/goods'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,

            children: [{
                path: '/page/page1',
                name: 'page1',
                component: page1,
            }, {
                path: '/page/goods',
                name: 'goods',
                component: goods,
            }]


        },

    ]
})