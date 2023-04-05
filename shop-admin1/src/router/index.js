import { 
    createRouter ,
    createWebHashHistory
} from "vue-router"
import Index from "~/pages/index.vue"
import NotFound from "~/pages/404.vue"
import Login from "~/pages/login.vue"
const routers=[
   {
    path :'/',
    component:Index
   },
   {
    path :'/login',
    component:Login
   },
   { 
    path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound 
   },

]
const router=createRouter({
    history: createWebHashHistory(),
    routes:routers
})
export default router 