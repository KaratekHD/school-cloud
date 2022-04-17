import Vue from "vue";
import Router from "vue-router";
import LandingPage from "./views/LandingPage";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/stylusauth",
      name: "stylusauth",
      component: () => import("./views/Stylusauth"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // We wait for Keycloak init, then we can call all methods safely
    while (router.app.$keycloak.createLoginUrl === null) {
      await sleep(100);
    }
    if (router.app.$keycloak.authenticated) {
      next();
    } else {
      router.app.$keycloak.login({
        redirectUri: window.location.origin + to.path,
      });
      //const loginUrl = router.app.$keycloak.createLoginUrl();
      //window.location.replace(loginUrl);
    }
  } else {
    next();
  }
});

export default router;
