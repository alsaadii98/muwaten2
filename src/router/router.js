import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import CreateForm from "../views/CreateForm.vue";
import CreateForm2 from "../views/CreateForm2.vue";
import DownloadPage from "../views/downloadPage.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/create",
    name: "CreateForm",
    component: CreateForm,
  },
  {
    path: "/create2",
    name: "CreateForm2",
    component: CreateForm2,
  },
  {
    path: "/download",
    name: "DownloadPage",
    component: DownloadPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "text-sky-700 fill-sky-700",
});

export default router;
