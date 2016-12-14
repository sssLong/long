const Vue = require('vue');
const VueRouter = require('vue-router');
Vue.use(VueRouter);
const router = new VueRouter({
    //model: 'history',
    routes: [{
        path: '/',
        component: require('../pages/index.vue')
    }, {
        path: '/user/about',
        component: require('../pages/about.vue')
    }, {
        path: '/user/zhaopin/php',
        component: require('../pages/recruitment.vue'),
        children: [{
            path: '/user/zhaopin/php',
            component: require('../pages/recu/php.vue')
        },
        {
            path: '/user/zhaopin/leader',
            component: require('../pages/recu/leader.vue')
        }, {
            path: '/user/zhaopin/market',
            component: require('../pages/recu/market.vue')
        }, {
            path: '/user/zhaopin/git',
            component: require('../pages/recu/git.vue')
        }, {
            path: '/user/zhaopin/buy',
            component: require('../pages/recu/buy.vue')
        }, ]
    }, {
        path: '/user/contact',
        component: require('../pages/contact.vue')
    }]
})


window.app = new Vue({
    el: '#box',
    data: {
        show: false
    },
    router: router,
    created: function() {
        
    },
    methods: {
        showChange: function() {

            if (this.show) {
                this.show = false
            } else {
                this.show = true
            }
        }

    }
})
