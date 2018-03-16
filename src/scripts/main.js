import "bootstrap";
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Announcements from "../pages/Announcements.vue";
import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/announcements", name: "Announcements", component: Announcements }
];

const router = new VueRouter({
	routes // short for `routes: routes`
});

const app = new Vue({
	router,
	template: "<App/>",
	components: { App }
}).$mount("#app");