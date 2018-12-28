import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabbar/home'
import eater from '@/components/tabbar/eater'
import shopcar from '@/components/tabbar/shopcar'
import myself from '@/components/tabbar/myself'
import hot from '@/components/navbar/hot'
import fruits from '@/components/navbar/fruits'
import food from '@/components/navbar/food'
import seafood from '@/components/navbar/seafood'
import hotinfo from '@/components/hotinfo'
import goodlist from '@/components/goods/goodlist'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home,
            children: [{
                    path: 'hot',
                    component: hot
                },
                {
                    path: '/',
                    redirect: 'hot'
                },
                {
                    path: 'food',
                    component: food
                },
                {
                    path: 'seafood',
                    component: seafood
                },
                {
                    path: 'fruits',
                    component: fruits
                },
            ]
        },
        {
            path: '/eater',
            name: 'eater',
            component: eater
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            component: shopcar
        },
        {
            path: '/myself',
            name: 'myself',
            component: myself
        },
        {
            path: '/home/hotinfo/:id',
            name: 'hotinfo',
            component: hotinfo
        },
        {
            path: '/home/goodlist',
            name: 'goodlist',
            component: goodlist
        },
    ],
    linkActiveClass: "mui-active"
})