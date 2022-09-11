import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./style.css";
import "material-icons/iconfont/round.css";
createApp(App).use(router).mount("#app");
