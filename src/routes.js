import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import About from './components/About.vue'
import Category from './components/category.vue'
import Card from './components/card.vue'
import Navbar from './components/Navbar.vue'
import Detail from './components/Detail.vue'
import Login from './components/Login.vue'
import SignUp from './components/Signup.vue'
import EditProfile from './components/EditProfile.vue'
import Edit from './components/Edit.vue'
import CartPaymentPage from './components/CartPaymentpage.vue'
import { nextTick } from "vue";
import store from "./Store/index";


const routes = [
    {
        name: "Home",
        path: '/',
        component: Home,
        meta: { auth: true }
    },
    {
        name: "About",
        path: '/about',
        component: About,
        meta: { auth: true }
    },
    {
        name: "Category",
        path: '/category',
        component: Category,
        // meta: { auth: true }
    },
    {
        name: "Card",
        path: '/card',
        component: Card,
        meta: { auth: true }
    },
    {
        name: "Navbar",
        path: '/navbar',
        component: Navbar,
        meta: { auth: true }
    },
    {
        name: "Detail",
        path: '/detail/:id',
        component: Detail,
        // meta: { auth: true }
    },
    {
        name: "Login",
        path: '/login',
        component: Login,
        meta: { auth: false }
    },
    {
        name: "SignUp",
        path: '/signup',
        component: SignUp,
        meta: { auth: false }
    },
    {
        name: "EditProfile",
        path: '/edit',
        component: EditProfile,
         meta: { auth: true }
    },
    {
        name: "Edit",
        path: '/editdetail/:id',
        component: Edit,
         meta: { auth: true }
    },
    {
        name: "CartPaymentPage",
        path: '/paymentPage/:id',
        component: CartPaymentPage,
        meta: { auth: true }
    },

] 

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.isAuthenticated;

    if ('auth' in to.meta && to.meta.auth &&  !isAuthenticated) {
        next('/login');
    } else if ('auth' in to.meta && !to.meta.auth && isAuthenticated) {
        next('/');
    } else {
        next();
    }
});


export default router