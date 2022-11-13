<template>
  <q-page dir="rtl">
    <DynamicHeader title="ملفي" />
    <UploadProfileImg @uploadFile="profileImgFile" />
    <div class="q-mx-auto text-center q-my-sm text-body2 text-bold">
      اسم المستخدم
    </div>
    <SettingLinks />
  </q-page>
</template>

<script>
import DynamicHeader from "../UI/DynamicHeader.vue";
import UploadProfileImg from "../UI/UploadProfileImg.vue";
import SettingLinks from "./SettingLinks.vue";
export default {
  components: { DynamicHeader, UploadProfileImg, SettingLinks },
  methods: {
    profileImgFile(file) {
      //
    },
  },
};
</script>

<style>
</style>
