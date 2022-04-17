<script>
import KaratekHeader from "./components/KaratekHeader";
import KaratekFooter from "./components/KaratekFooter";

export default {
  name: "App",
  components: {
    KaratekHeader,
    KaratekFooter,
  },
};
</script>

<template>
  <div id="app">
    <karatek-header />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
    <karatek-footer />
  </div>
</template>

<style lang="scss">
@import "./styles/carbon";
</style>
