import { createRouter, createWebHashHistory } from "vue-router";
import AdminTopic from "../views/topic/admin-topic.vue";
import AllTopic from "../views/topic/all-topic.vue";

const routes = [{
        path: '/',
        redirect: '/alltopic'
    },
    {
        path: "/alltopic",
        name: "AllTopic",
        component: AllTopic,
    },
    {
        path: "/admintopic",
        name: "AdminTopic",
        component: AdminTopic
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;