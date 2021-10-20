import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import NotFound from "./components/NotFound.vue";

import Amplify, { Analytics } from "aws-amplify";
import aws_exports from "./aws-exports";
import {
  applyPolyfills,
  defineCustomElements,
} from "@aws-amplify/ui-components/loader";

Amplify.configure(aws_exports);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

// Check for auto tracked name
Analytics.autoTrack("pageView", {
  provider: "AWSPinpoint",
  enable: true,
  disable: false,
  type: "SPA",
  attributes: () => {
    return {
      attr: "attr",
    }; // returns the attributes
  },
  getUrl: () => window.location.origin + window.location.pathname, // returns the URL
});

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/404", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
