<template>
  <div class="service-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3">
    <cv-tile class="tile-image" kind="clickable" :href="href">
      <img class="bx--tile-content" :src="img" />
    </cv-tile>
    <cv-tile class="service-tile" kind="clickable" :href="href">
      <div class="service-tile-content">
        <h4 class="service-card__heading">
          {{ heading }}
        </h4>
        <p>{{ description }}</p>
      </div>
      <cv-button class="service-card-button" kind="ghost" :icon="ArrowRight16"
        >Get started</cv-button
      >
    </cv-tile>
  </div>
</template>

<script>
import { ArrowRight16 } from "@carbon/icons-vue";
export default {
  name: "ServiceCard",
  props: {
    heading: String,
    href: String,
    description: String,
    img: Object,
  },
  methods: {
    link(str) {
      location.href = str;
    },
  },
  created() {
    this.ArrowRight16 = ArrowRight16;
  },
};
</script>

<style lang="scss">
@import "../../styles/carbon-utils";
@import "../../styles/screens";

.service-tile {
  margin-left: 0;
}
.tile-image {
  padding: 0;
}

.service-card {
  @include sm-screen {
    margin-left: $spacing-04;
    margin-right: $spacing-04;
    padding-top: $spacing-03;
    padding-bottom: $spacing-03;
  }

  @include md-screen {
    padding-top: $spacing-03;
    padding-bottom: $spacing-03;
  }
}

.service-card-button {
  margin: $spacing-02;
}

.service-tile-content {
  padding: $spacing-04;
}

.service-card__heading {
  margin-top: 0;
  margin-bottom: $spacing-02;
  margin-left: $spacing-02;
  margin-right: $spacing-02;
}
</style>
