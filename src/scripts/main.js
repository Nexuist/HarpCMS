import "bootstrap";
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", component: Home }
];

const router = new VueRouter({
	routes // short for `routes: routes`
});

const app = new Vue({
	router,
	template: "<App/>",
	components: { App }
}).$mount("#app");