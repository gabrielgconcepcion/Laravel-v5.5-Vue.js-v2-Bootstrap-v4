
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import routes from './routes';
var router = new VueRouter({
    history: true,
    root: 'app',
    routes
});
router.beforeEach(function (to, from, next) {
    if (to.path == '') {
        return next('/');
    }
    return next();
});
Vue.use(VueRouter);

const app = new Vue({
    el: '#app'
    , router
});
