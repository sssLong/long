const Vue = require('vue');
const VueRouter = require('vue-router');

const router = new VueRouter({
    model: 'history',
    routes: [
    	{
            path: '/',
            component: require('../pages/index.vue')
        },
        {
        	path:'/user/about',
        	component:require('../pages/about.vue')
        },
        {
        	path:'/user/zhaopin',
        	component:require('../pages/recruitment.vue')
        },
        {
        	path:'/user/concact',
        	component:require('../pages/concact.vue')
        }
    ]
})


new Vue({
    el:'#nav',
    router:router
})