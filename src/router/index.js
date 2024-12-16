import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Auth from "../views/Auth.vue"
import Wishlist from "@/views/Wishlist.vue"
import MyDestinations from "@/views/MyDestinations.vue"
import DestDetails from "@/views/DestDetails.vue"
import { useUserStore } from "@/stores/user"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/auth",
            name: "auth",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/Auth.vue")
        },
        {
            path: "/wishlist",
            name: "wishlist",
            component: Wishlist
        },
        {
            path: "/myDestinations",
            name: "myDestinations",
            component: MyDestinations
        },
        {
            path: "/DestDetails/:destId",
            name: "destDetails",
            component: () => import("../views/DestDetails.vue")
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    const authStore = useUserStore()
    const isAuthenticated = await authStore.checkUser()
    console.log(isAuthenticated, to.name)

    if (to.name !== "auth" && !isAuthenticated) {
        console.log("hit first if")
        return next({ name: "auth" })
    }

    if (to.name === "auth" && isAuthenticated) {
        console.log("hit second if")
        return next({ name: "home" })
    }

    next()
})

export default router
