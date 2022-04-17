<template>
  <div class="bx--grid bx--grid--full-width stylusauth-page">
    <div class="bx--row stylusauth-page__head">
      <div class="bx--col-lg-16">
        <cv-breadcrumb aria-label="Page navigation">
          <cv-breadcrumb-item>
            <cv-link to="/">Home</cv-link>
          </cv-breadcrumb-item>
          <cv-breadcrumb-item>
            <cv-link to="#">Write</cv-link>
          </cv-breadcrumb-item>
          <cv-breadcrumb-item>
            <cv-link href="#" aria-current="page">Authentication</cv-link>
          </cv-breadcrumb-item>
        </cv-breadcrumb>
        <h1 class="stylusauth-page__heading">Access Tokens for Write</h1>
      </div>
    </div>

    <cv-toast-notification
      class="stylusauth-page__notification"
      v-if="$keycloak.authenticated === false"
      kind="error"
      title="Unauthenticated"
      sub-title="You must be authenticated to access this page."
      caption="Honestly, I don't even know how you got here."
      :hide-close-button="true"
    ></cv-toast-notification>
    <div class="bx--row">
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row">
            <div class="bx--col-md-4">
              <h2 class="landing-page__subheading">What is this for?</h2>
              <p class="landing-page__p">
                The authentication mechanism included in
                <a href="https://github.com/styluslabs/stylusboard"
                  >Stylusboard</a
                >
                is pretty basic and lacks support for 2FA and a centralized
                login system. This page generates secure, strong and unique
                passwords in order to solve this problem. By clicking the button
                below, you will receive an access token that is bound to your
                Karatek Account. Should you lose this token, you can revoke it
                and generate a new one just by clicking the button again.
              </p>
              <cv-button :disabled="show_loading" @click="show_creds()"
                >Generate Access Token</cv-button
              ><cv-inline-loading
                v-if="show_loading"
                ref="loading"
                loaded-text="Complete."
                :state="loading_state"
                loading-text="Your credentials are being generated."
              ></cv-inline-loading>
            </div>
            <div class="bx--col-md-4">
              <img
                class="landing-page__img"
                width="75%"
                src="https://vue-step-6--carbon-tutorial-vue.netlify.app/img/tab-illo.296fdb9e.png"
                alt="Stylusboard Authentication"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bx--row bx--no-gutter stylusauth-page__body"
      v-if="$keycloak.authenticated"
    >
      <div class="bx--col-lg-16">
        <cv-modal
          ref="dialog"
          @modal-shown="actionShown"
          @modal-hidden="actionHidden"
        >
          <template slot="label">Write</template>
          <template slot="title">Your Credentials are ready.</template>
          <template slot="content">
            <cv-inline-notification
              kind="warning"
              sub-title="The credendentials below can be used to authenticate your Karatek Account against Write. Treat them like a password and keep them secret!"
              :hide-close-button="true"
            ></cv-inline-notification>
            <cv-data-table
              class="credentials-table"
              :columns="['Username', 'Password']"
              :data="[[$keycloak.userName, this.token]]"
            ></cv-data-table>
          </template>
          <template slot="primary-button">OK</template>
        </cv-modal>
        <!--<cv-data-table class="credentials-table" :columns="['Username', 'Password']" :data="[[$keycloak.userName, 'Test']]"></cv-data-table>-->

        <br />
      </div>
    </div>
    <!--<div ref="spacer" class="bx--row bx--no-gutter spacer"></div>-->
  </div>
</template>

<script>
export default {
  name: "StylusAuth",
  title: "Stylusauth",
  data() {
    return {
      token: null,
      loading_state: "loading",
      show_loading: false,
    };
  },
  methods: {
    async show_creds() {
      this.loading_state = "loading";
      this.show_loading = true;
      const response = await fetch(
        "http://localhost:8000/stylusauth/get_token/",
        {
          headers: { Authorization: "Bearer " + this.$keycloak.token },
        }
      );
      const json = await response.json();
      console.log(json);
      this.token = json.token;
      this.loading_state = "loaded";
      this.$refs.dialog.show();
    },
    async actionHidden() {
      this.show_loading = false;
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/carbon-utils";
@import "../LandingPage/mixins";

.stylusauth-page__head {
  padding-left: $spacing-02;
  padding-top: $spacing-05;
  padding-bottom: $spacing-07 * 2;
  @include landing-page-background;
}

.stylusauth-page__heading {
  @include carbon--type-style("productive-heading-05");
}

.stylusauth-page__p {
  @include carbon--type-style("productive-heading-03");
  margin-top: $spacing-06;
  margin-bottom: $spacing-08;
  @include carbon--breakpoint-between((320px + 1), md) {
    max-width: 75%;
  }
}

.stylusauth-page__label {
  @include carbon--type-style("heading-01");
}

.stylusauth-page__notification {
  // on the top right corner
  position: fixed;
  right: 0;
  top: $spacing-08 + $spacing-04;
}

.stylusauth-page__head {
  @include landing-page-background;
}

.credentials-table {
  // center the table
  margin-left: auto;
  margin-right: auto;
}

.bx--snippet-container {
  width: 100%;
}

.karatek__footer {
  position: relative;
}
</style>
