<template>
  <div class="bx--grid bx--grid--full-width landing-page">
    <div class="bx--row landing-page__head">
      <div class="bx--col-lg-16">
        <cv-breadcrumb aria-label="Page navigation">
          <cv-breadcrumb-item>
            <cv-link href="#" aria-current="page">Home</cv-link>
          </cv-breadcrumb-item>
        </cv-breadcrumb>
        <h1 v-if="$keycloak.authenticated" class="landing-page__heading">
          Welcome to the Karatek School Cloud, {{ $keycloak.fullName }}!
        </h1>
        <h1 v-else class="landing-page__heading">
          Welcome to the Karatek School Cloud!
        </h1>
      </div>
    </div>
    <div class="bx--row landing-page__r2">
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width"></div>
        <br />
        <service-section>
          <service-card
            heading="Files"
            href="https://cloud.yourkara.tech/apps/files/"
            description="Upload your documents, notes and more to the cloud. Share them with other users and collaborate on them! All while keeping your data private."
            img="https://yourkara.tech/assets/img/Files.png"
          />
          <service-card
            heading="Deck"
            description="Keep track of all the task you need to do, see when they are due, upload solutions and more! You can even share this with other users."
            href="https://cloud.yourkara.tech/apps/deck/#/board/6"
            img="https://yourkara.tech/assets/img/deck.png"
          />
          <service-card
            heading="Write"
            description="Collaborate on hand written notes in real time using the Styluslabs Write application. Avaliable for Linux, Windows, Android and IOS."
            href="/stylusauth"
            img="https://yourkara.tech/assets/img/Write.png"
          />
          <service-card
            heading="HedgeDoc"
            description="Collaborate on Markdown notes in real time. Supports inline LaTeX Code, Tables, Images and much more. Usable for Quick Notes, Presentations etc."
            href="https://md.yourkara.tech"
            img="https://cloud.yourkara.tech/s/Nnnmc4pZtf5xeDb/download/hedgedoc.png"
          />
        </service-section>
      </div>
    </div>
    <div class="bx--row landing-page__r3">
      <info-section heading="The Principles" class="landing-page__r3">
        <info-card
          heading="It is private."
          body="Karatek School Cloud is, unlike a lot of comparable proprietary solutions, build with your privacy in mind. For us, privacy is not just an after-thought."
          :icon="VirtualPrivateCloud32"
        />
        <info-card
          heading="It is open."
          body="We believe that in order to trust an application, you have to be able to see its internals. That's why Karatek School Cloud is (almost) completely open-source."
          :icon="Code32"
        />
        <info-card
          heading="It is platform-independent."
          body="We think that everyone should be able to work the way they like it. We don't force you to use a specific type of device or use a specific company's hardware."
          :icon="Devices32"
        />
      </info-section>
    </div>
  </div>
</template>

<script>
import { ServiceSection, ServiceCard } from "../../components/ServiceSection";
import { InfoSection, InfoCard } from "../../components/InfoSection";
import { Devices32, VirtualPrivateCloud32, Code32 } from "@carbon/icons-vue";

export default {
  components: { ServiceCard, ServiceSection, InfoSection, InfoCard },
  title: "Home",
  created() {
    // Add icons to this
    Object.assign(this, {
      Devices32,
      VirtualPrivateCloud32,
      Code32,
    });
  },
};
</script>
<style lang="scss">
@import "../../styles/carbon-utils";
@import "./mixins";
.landing-page__illo {
  max-width: 100%;
}
.landing-page__head {
  padding-left: $spacing-02;
  padding-top: $spacing-05;
  padding-bottom: $spacing-07 * 2;
  @include landing-page-background;
}
.landing-page__heading {
  @include carbon--type-style("productive-heading-05");
}

.landing-page__subheading {
  @include carbon--type-style("productive-heading-03");
  @include carbon--font-weight("semibold");
}
.landing-page__p {
  @include carbon--type-style("productive-heading-03");
  margin-top: $spacing-06;
  margin-bottom: $spacing-08;
  @include carbon--breakpoint-between((320px + 1), md) {
    max-width: 75%;
  }
}
.landing-page__r3 {
  padding-top: $spacing-09;
  padding-bottom: $spacing-09;
  @include landing-page-background;
}
.landing-page__label {
  @include carbon--type-style("heading-01");
}
</style>

<!--

-->
