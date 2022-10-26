
<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white">
      <q-toolbar>
        <q-toolbar-title>
          <footer-section />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script>
import FooterSection from "src/components/footer/FooterSection.vue";
export default {
  components: { FooterSection },
};
</script>

<style>
</style>
