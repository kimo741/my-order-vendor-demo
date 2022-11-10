
<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
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

    <q-footer class="bg-white">
      <q-toolbar>
        <q-toolbar-title>
          <footer-section @createPost="createPost" />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script>
import { ref } from "vue";
import FooterSection from "src/components/footer/FooterSection.vue";
import CreatePost from "src/components/UI/Dashboard/CreatePost.vue";
export default {
  components: { FooterSection, CreatePost },
  setup() {
    return {
      create_post: ref(false),
    };
  },
  methods: {
    createPost() {
      this.create_post = true;
    },
    closeDialogPost() {
      this.create_post = false;
    },
  },
};
</script>

<style>
</style>
