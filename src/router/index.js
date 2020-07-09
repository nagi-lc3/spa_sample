import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import Service from '@/components/Service'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/news',
            name: 'ニュース',
            component: News
        },
        {
            path: '/service',
            name: 'サービス',
            component: Service
        }
    ]
})
