import { createRouter,createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import About from './components/About.vue'
import Category from './components/category.vue'
import Card from './components/card.vue'
import Navbar from './components/Navbar.vue'
import Detail from './components/Detail.vue'
import Login from './components/Login.vue'
import SignUp from './components/Signup.vue'
import EditProfile from './components/EditProfile.vue'

const routes=[
    {
        name:"Home",
        path:'/',
        component:Home
    },
    {
        name:"About",
        path:'/about',
        component:About
    },
    {
        name:"Category",
        path:'/category',
        component:Category
    },
    {
        name:"Card",
        path:'/card',
        component:Card
    },
    {
        name:"Navbar",
        path:'/navbar',
        component:Navbar
    },
    {
        name:"Detail",
        path:'/detail/:id',
        component:Detail
    },
    {
        name:"Login",
        path:'/login',
        component:Login
    },
    {
        name:"SignUp",
        path:'/signup',
        component:SignUp
    },
    {
        name:"EditProfile",
        path:'/edit',
        component:EditProfile
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router