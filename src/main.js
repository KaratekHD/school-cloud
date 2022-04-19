import CarbonComponentsVue from "@carbon/vue";
import titleMixin from "./mixins/titleMixin";
Vue.use(CarbonComponentsVue);
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueKeyCloak from "@dsb-norge/vue-keycloak-js";

let keycloak_config = {
  config: {
    realm: process.env.VUE_APP_KEYCLOAK_REALM,
    url: process.env.VUE_APP_KEYCLOAK_URL,
    clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID,
  },
  init: {
    onLoad: "check-sso",
  },
  logout: {
    redirectUri: process.env.VUE_APP_KEYCLOAK_LOGOUT_REDIRECT_URL,
  },
};

Vue.use(VueKeyCloak, keycloak_config);
Vue.mixin(titleMixin);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
