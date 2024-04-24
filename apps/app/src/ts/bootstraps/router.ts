import { createRouter, createWebHistory } from "vue-router";
import type { App } from "vue";

// Views
import TicketView from "@/ts/views/TicketView.vue";


export function routerBootstrap(app: App) {

    app.use(
        createRouter({
            history: createWebHistory(),
            routes: [
                {
                    path: "/",
                    name: 'index',
                    component: TicketView
                },
                {
                    path: "/admin",
                    name: 'admin',
                    component: () => import("@/ts/views/AdminView.vue")
                }
            ]
        })
    );
}