import Vue from "vue";
import VueRouter from "vue-router";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import messages from "./i18n";

Vue.use(VueRouter);
Vue.use(VueI18n);

const Home = { template: "<div><h2>Home Page</h2></div>" };
const About = { template: "<div><h2>About Page</h2></div>" };
const Contact = { template: "<div><h2>Contact Page</h2></div>" };

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

const vueI18n = new VueI18n({
  locale: "zh-CN", // 设置当前语言环境，默认中文简体
  messages: messages, // 设置语言环境对应信息
  fallbackLocale: "zh-CN"
});

new Vue({
  el: "#app",
  router,
  i18n: vueI18n,
  render: h => h(App),
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event("render-event"));
  }
});
