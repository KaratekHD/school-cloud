<template>
  <div class="bx--grid bx--grid--full-width error-page">
    <h1 class="error-header">Yikes. Something went wrong.</h1>
    <p class="error-description">
      Sorry, we can’t find the page you are looking for. Maybe you mistyped
      something?
    </p>
    <span class="error-code">404</span>
  </div>
</template>

<script>
export default {
  name: "ErrorScreen",
  props: {
    title: String,
    description: String,
    code: String,
  },
};
</script>

<style lang="scss">
@import "../../styles/carbon-utils";
.error-page {
  background: black;
  min-height: 87vh;
}
.error-header {
  color: white;
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.28572;
  margin-bottom: 1.5rem;
  padding-top: 1.5rem;
}

.error-description {
  color: white;
  font-size: 1.25rem;
  font-weight: var(--cds-body-long-01-font-weight, 400);
  letter-spacing: var(--cds-body-long-01-letter-spacing, 0.16px);
  line-height: var(--cds-body-long-01-line-height, 1.42857);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  max-width: 500px;
}

.error-code {
  -webkit-text-fill-color: #0000;
  animation: FourOhFour-module--gradient--dIxR7 2s ease infinite;
  background: linear-gradient(35deg, #92eeee, #a66efa);
  -webkit-background-clip: text;
  background-size: 200% 200%;
  display: inline-block;
  font-size: 2.625rem;
  font-size: 144px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.19;
  margin: 2.5rem 0 10rem;
}
@media (min-width: 42rem) {
  .error-code {
    font-size: 2.625rem;
    font-size: calc(1.3125rem + 3.125vw);
  }
}
@media (min-width: 66rem) {
  .error-code {
    font-size: 3.375rem;
    font-size: calc(1.82813rem + 2.34375vw);
  }
}
@media (min-width: 82rem) {
  .error-code {
    font-size: 3.75rem;
    font-size: calc(-1.07353rem + 5.88235vw);
    line-height: 1.16;
  }
}
@media (min-width: 99rem) {
  .error-code {
    font-size: 4.75rem;
    line-height: 1.13;
  }
}
@media (min-width: 42rem) {
  .error-code {
    font-size: 25vw;
  }
}
@media (min-width: 66rem) {
  .error-code {
    font-size: 300px;
  }
}
</style>
