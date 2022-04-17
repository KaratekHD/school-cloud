<template>
  <cv-header aria-label="Karatek School Cloud">
    <cv-skip-to-content href="#main-content"
      >Skip to content</cv-skip-to-content
    >

    <cv-header-name to="/" prefix="Karatek">School Cloud</cv-header-name>
    <cv-header-nav>
      <cv-header-menu title="Nextcloud">
        <cv-header-menu-item
          aria-label="Dashboard"
          href="https://cloud.yourkara.tech/apps/dashboard/"
          >Dashboard</cv-header-menu-item
        >
        <cv-header-menu-item
          aria-label="Files"
          href="https://cloud.yourkara.tech/apps/files/"
          >Files</cv-header-menu-item
        >
        <cv-header-menu-item
          aria-label="Deck"
          href="https://cloud.yourkara.tech/apps/deck/#/board/6"
          >Deck</cv-header-menu-item
        >
      </cv-header-menu>
      <cv-header-menu-item
        aria-label="HedgeDoc"
        href="https://md.yourkara.tech/"
        >HedgeDoc</cv-header-menu-item
      >
      <cv-header-menu-item
        aria-label="Chat"
        href="https://cloud.yourkara.tech/apps/riotchat/"
        >Chat</cv-header-menu-item
      >
      <cv-header-menu-item aria-label="Stylusauth" to="/stylusauth"
        >Stylusauth</cv-header-menu-item
      >
      <!--<cv-header-menu-item aria-label="Devel" to="/stylusauth">Devel</cv-header-menu-item>-->
    </cv-header-nav>
    <template v-slot:header-global>
      <cv-header-global-action
        v-if="$keycloak.authenticated"
        aria-label="Log Out"
        label="Log Out"
        @click="$keycloak.logoutFn()"
      >
        <logout-20 />
      </cv-header-global-action>
      <cv-header-global-action
        v-else
        aria-label="Log In"
        label="Log In"
        @click="login()"
      >
        <login-20 />
      </cv-header-global-action>
      <cv-header-global-action
        v-if="$keycloak.authenticated"
        aria-label="My Account"
        :label="$keycloak.fullName"
        @click="$keycloak.accountManagement()"
        href="https://auth.karatek.net/auth/realms/master/account/"
      >
        <user-avatar-20 />
      </cv-header-global-action>
      <cv-header-global-action
        aria-label="App switcher"
        label="App Switcher"
        aria-controls="switcher-panel"
      >
        <app-switcher-20 />
      </cv-header-global-action>
    </template>
    <template v-slot:right-panels>
      <cv-header-panel id="switcher-panel">
        <cv-switcher>
          <cv-switcher-item>
            <cv-switcher-item-link href="javascript:void(0)" selected>
              Karatek School Cloud
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link
              href="https://cloud.yourkara.tech/apps/files/"
            >
              Files
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link
              href="https://cloud.yourkara.tech/apps/deck/#/board/6"
            >
              Deck
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link
              href="https://cloud.yourkara.tech/apps/riotchat/"
            >
              Matrix
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link href="https://stylus.yourkara.tech/">
              Stylusauth
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link href="https://auth.karatek.net/auth/admin/">
              Administration Console
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link href="https://beans.karatek.net">
              Beans
            </cv-switcher-item-link>
          </cv-switcher-item>
          <cv-switcher-item>
            <cv-switcher-item-link href="https://music.yourkara.tech">
              TS3 Music Bot
            </cv-switcher-item-link>
          </cv-switcher-item>
        </cv-switcher>
      </cv-header-panel>
    </template>
  </cv-header>
</template>

<script>
import {
  UserAvatar20,
  AppSwitcher20,
  Login20,
  Logout20,
} from "@carbon/icons-vue";

export default {
  name: "Karatek-Header",
  components: { UserAvatar20, AppSwitcher20, Login20, Logout20 },
  methods: {
    link(str) {
      location.href = str;
    },
    login() {
      this.$keycloak.login();
    },
  },
};
</script>
