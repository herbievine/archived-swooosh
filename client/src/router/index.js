import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/analytics',
        name: 'Analytics',
        component: () => import('../views/Analytics'),
    },
    {
        path: '/404',
        name: 'PageNotFoumd',
        component: () => import('../views/PageNotFound'),
    },
    {
        path: '*',
        redirect: '/404',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
