<template>
  <div class="bx--grid bx--grid--full-width write-introduction-page">
    <div class="bx--row write-introduction-page__head">
      <div class="bx--col-lg-16">
        <cv-breadcrumb aria-label="Page navigation">
          <cv-breadcrumb-item>
            <cv-link to="/">Home</cv-link>
          </cv-breadcrumb-item>
          <cv-breadcrumb-item>
            <cv-link href="#" aria-current="page">Write</cv-link>
          </cv-breadcrumb-item>
        </cv-breadcrumb>
        <h1 class="write-introduction-page__heading">Get started with Write</h1>
        <p>If you're just here to get your token, visit</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WriteIntroduction",
};
</script>

<style lang="scss">
@import "../../../styles/carbon-utils";
@import "../../LandingPage/mixins";

.write-introduction-page__head {
  padding-left: $spacing-02;
  padding-top: $spacing-05;
  padding-bottom: $spacing-07 * 2;
  @include landing-page-background;
}

.write-introduction-page__heading {
  @include carbon--type-style("productive-heading-05");
}
</style>
