import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./components/home.vue";
import about from "./components/about.vue";
import index from "./components/index.vue"
import register from "./components/register.vue"
import login from "./components/login.vue"
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: '/index',
        component: index,
        children: [
            {
                path: '/',
                component: home
            },
            {
                path: "/about",
                component: about
            }
        ]
    },
    {
        path:'/',
        component:register
    },
    {
        path:'/login',
        component:login
    }

]

var router = new VueRouter({
    routes,
    mode:'history'
})
//注册导航守卫,路由切换之前执行
router.beforeEach((to,from,next)=>{
    //去的路由
    // console.log(to);
    //来的路由
    if(to.matched.length==0){
        //不存在
        // next('/error')
    }else{
        //必须要执行的,不执行的话,会和node.js中的中间件一样,不会往后走了
        next()
    }
    
})
export default router;

