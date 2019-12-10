import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./components/view/thirdNav/home.vue";
import about from "./components/view/firstNav/about.vue";
import index from "./components/index.vue"

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
        path: '/index',
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            },
        component: index,
        children: [{
                path: '/',
                component: () => import('./components/view/common/welcome.vue')
            },
            {
                path: '/home',
                component: home
            },
            {
                path: "/about",
                component: about
            },
            {
                path: '/HelloWorld',
                component: () => import('./components/view/seccondNav/HelloWorld.vue')
            },
            {
                path: '/404',
                component: () => import('./components/view/common/404.vue')
            },

        ]
    },
    {
        path: '/',
        component: () => import('./components/view/lg+rg/register.vue')
    },
    {
        path: '/login',
        component: () => import('./components/view/lg+rg/login.vue')
    },
    {
        path: '*',
        redirect: '/404'
    }


]

var router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;