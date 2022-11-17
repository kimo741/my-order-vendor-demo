
<template>
  <q-layout view="hHh lpR fFf" @scroll="handleScroll">
    <q-page-container v-if="this.$q.platform.is.mobile">
      <router-view />
      <q-dialog
        v-model="create_post"
        :maximized="true"
        style="padding: 0 !important"
        transition-show="slide-up"
        transition-hide="slide-down"
        persistent
      >
        <CreatePost @closePost="closeDialogPost" />
      </q-dialog>
    </q-page-container>
    <q-page-container v-else>
      <NoDesktop />
    </q-page-container>

    <q-footer class="bg-white">
      <q-toolbar>
        <q-toolbar-title>
          <footer-section @createPost="createPost" :hideButt="hideButton" />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script>
import { ref } from "vue";
import FooterSection from "src/components/footer/FooterSection.vue";
import CreatePost from "src/components/UI/Dashboard/CreatePost.vue";
import NoDesktop from "src/pages/NoDesktop.vue";
export default {
  components: { FooterSection, CreatePost, NoDesktop },
  setup() {
    return {
      create_post: ref(false),
      infoo: ref(false),
      hideButton: ref(false),
    };
  },
  methods: {
    createPost() {
      this.create_post = true;
    },
    closeDialogPost() {
      this.create_post = false;
    },
    handleScroll(e) {
      if (e.direction == "up") {
        this.hideButton = false;
      } else {
        this.hideButton = true;
      }
    },
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
    console.log(this.$q);
  },
};
</script>

<style>
</style>
