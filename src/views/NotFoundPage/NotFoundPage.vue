<template>
  <error-screen
    title="Yikes. You're not supposed to see this."
    description="Sorry, we can’t find the page you are looking for. Maybe you mistyped something?"
    code="404"
  />
</template>

<script>
import { ErrorScreen } from "../../components/ErrorScreen";
export default {
  components: { ErrorScreen },
  title: "NotFoundPage",
};
</script>
