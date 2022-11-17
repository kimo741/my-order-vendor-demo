<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh"></div>

      <div class="text-h1 text-primary text-bold">
        Oops. You are now using non-mobile device (this application will
        compilng to mobile application with capacitor please open it by mobile
        to show ui test for app)
      </div>

      <!-- <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      /> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
