<template>
  <footer class="karatek__footer bx--grid bx--grid--full-width">
    <div class="bx--row">
      <div class="bx--col-md-2 bx--col-lg-2">
        <ul>
          <li class="karatek__footer_list">
            <a
              class="karatek__footer_link"
              href="https://karatek.net/contact"
              aria-label="Contact"
              >Contact</a
            >
          </li>
          <li class="karatek__footer_list">
            <a
              class="karatek__footer_link"
              href="https://karatek.net/Legal/privacy"
              aria-label="Privacy"
              >Privacy</a
            >
          </li>
          <li class="karatek__footer_list">
            <a
              class="karatek__footer_link"
              href="https://karatek.net/Legal/disclaimer"
              aria-label="Disclaimer"
              >Disclaimer</a
            >
          </li>
          <li class="karatek__footer_list">
            <a
              class="karatek__footer_link"
              href="https://karatek.net/Legal/privacy/de"
              aria-label="Datenschutz"
              >Datenschutz</a
            >
          </li>
        </ul>
      </div>
      <div class="bx--col-md-2 bx--col-lg-2">
        <ul>
          <li class="karatek__footer_list">
            <a
              class="karatek__footer_link"
              href="https://karatek.net/"
              aria-label="Homepage"
              >Karatek</a
            >
          </li>
          <li class="karatek__footer_list">
            <a
              class="karatek__footer_link"
              href="https://github.com/KaratekHD/school-cloud"
              aria-label="Source Code"
              >Source Code</a
            >
          </li>
          <li class="karatek__footer_list">
            <a
              class="karatek__footer_link"
              href="https://www.carbondesignsystem.com/"
              aria-label="Designsystem"
              >Designsystem</a
            >
          </li>
        </ul>
      </div>
      <div class="bx--col-md-2 bx--col-lg-2">
        <ul>
          <li class="karatek__footer_list">
            <a
              class="karatek__footer_link"
              href="/download"
              aria-label="Downloads"
              >Downloads</a
            >
          </li>
        </ul>
      </div>
      <div class="bx--col-md-2 bx--col-lg-2">
        <ul>
          <p>
            Made as free software with <Favorite16 /> by
            <a class="karatek__footer_link" href="https://github.com/KaratekHD"
              >Karatek</a
            >
          </p>
        </ul>
      </div>
    </div>
    <div class="bx-row">
      <a href="https://karatek.net"
        ><img
          src="https://karatek.net/assets/img/kouper-breeze.svg"
          alt="Karatek Logo"
          class="karatek__footer_logo"
      /></a>
    </div>
  </footer>
</template>

<style lang="scss">
@import "../../styles/carbon-utils";
.karatek__footer {
  padding: 1rem;
  background-color: $ui-05;
  color: $ui-02;
}

.karatek__footer_text {
  text-align: center;
  color: $ui-02;
}

.karatek__footer_link {
  color: $ui-02;
  text-decoration: none;
}

.karatek__footer_list {
  margin: $spacing-01;
  padding: $spacing-01;
}

.karatek__footer_logo {
  margin-top: $spacing-05;
}
</style>

<script>
import { Favorite16 } from "@carbon/icons-vue";
export default {
  name: "Karatek-Footer",
  components: { Favorite16 },
};
</script>
