import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/view/homeView.vue";
import booksView from "@/view/booksView.vue";
import loginView from "@/view/loginView.vue";
import registerView from "@/view/registerView.vue";
import contactView from "@/view/contactView.vue";
import bookDetailView from "@/view/bookDetailView.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/",
            name: "home",
            component: homeView
        },
        {
            path: "/login",
            name: "login",
            component: loginView
        },
        {
            path: "/books/:id",
            name: "/book-detail",
            component: bookDetailView

        },
        {
            path: "/books",
            name: "books",
            component: booksView
        },
        {
            path: "/contact",
            name: "contact",
            component: contactView
        },
        {
            path: "/register",
            name: "register",
            component: registerView
        },
    ],
    linkActiveClass: 'active-link',
});


export default router;