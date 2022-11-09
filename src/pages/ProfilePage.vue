<template>
  <q-page class="q-mx-sm">
    <DynamicHeader :setingIcon="true" title="ملفي" />
    <ProfileInfo />
    <HeighLightStory />
    <PostsContainer />
  </q-page>
</template>

<script>
import HeighLightStory from "src/components/profile/HeighLightStory.vue";
import ProfileInfo from "src/components/profile/ProfileInfo.vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import PostsContainer from "src/components/profile/PostsContainer.vue";
export default {
  components: { DynamicHeader, ProfileInfo, HeighLightStory, PostsContainer },
};
</script>

<style>
</style>
