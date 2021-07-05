import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../components/Users.vue'
// @ts-ignore
import UserCard from "../components/UserCard"
// @ts-ignore
import Products from "../components/Products";
import ProductCard from "@/components/ProductCard.vue";
import AddProduct from "@/components/AddProduct.vue";
Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/users/:id',
    name: 'UserCard',
    component: UserCard
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/products/:id',
    name: 'ProductCard',
    component: ProductCard
  }
]
const router = new VueRouter({
  routes
})
export default router


