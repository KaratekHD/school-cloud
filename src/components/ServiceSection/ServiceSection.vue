<template>
  <section class="bx--row service-section">
    <slot />
  </section>
</template>

<script>
export default {
  name: "ServiceSection",
};
</script>

<style lang="scss">
@import "../../styles/carbon-utils";

service-section {
  background: #000000;
}
</style>
