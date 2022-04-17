import CarbonComponentsVue from "@carbon/vue";
import titleMixin from "./mixins/titleMixin";
Vue.use(CarbonComponentsVue);
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueKeyCloak from "@dsb-norge/vue-keycloak-js";

let keycloak_config = {
  config: {
    realm: "master",
    url: "https://auth.karatek.net/auth",
    clientId: "test",
  },
  init: {
    onLoad: "check-sso",
  },
};

Vue.use(VueKeyCloak, keycloak_config);
Vue.mixin(titleMixin);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
