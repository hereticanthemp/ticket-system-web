import { createRouter, createWebHashHistory } from "vue-router"
import HelloWorld from "../pages/HelloWorld.vue"
import TicketBoard from "../pages/TicketBoard.vue"
import UserManage from "../pages/UserManagement.vue"

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/ticket", component: TicketBoard },
  { path: "/user", component: UserManage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;