<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader
      @emitSetting="settingPage"
      :setingIcon="true"
      title="ملفي"
      :back-icon="true"
      se
    />
    <UploadProfileImg />
    <!-- ///////// -->
    <!-- user name -->
    <!-- ///////// -->
    <div class="text-center text-body2 text-500 q-my-sm">اسم المستخدم</div>
    <!-- ///////////////////// -->
    <!-- ///user name edit//// -->
    <FieldInput
      icon="eva-edit-outline"
      label="الأسم"
      placeholder="اسم المستخدم"
      @emitToEdit="editUserName"
    />
    <FieldInput
      icon="eva-edit-outline"
      label="رقم الجوال"
      placeholder="********123"
      @emitToEdit="editPhoneNumber"
    />
    <FieldInput
      icon="eva-arrow-ios-back-outline"
      label="العنوان"
      placeholder="الرياض"
      @emitToEdit="changeAdress"
    />
    <FieldInput
      icon="eva-edit-outline"
      label="البريد الألكتروني"
      placeholder="mail@email.com"
      @emitToEdit="changeEmail"
      direction="ltr"
    />
    <FieldInput
      icon="eva-edit-outline"
      label="كلمة المرور"
      placeholder="********123"
      @emitToEdit="changePassword"
    />
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import UserImage from "src/components/UI/UserImage.vue";
import UploadProfileImg from "src/components/UI/UploadProfileImg.vue";
import FieldInput from "src/components/UI/FieldInput.vue";
export default {
  components: { DynamicHeader, UserImage, UploadProfileImg, FieldInput },
  methods: {
    editUserName() {
      this.$router.push({ name: "EditUserName" });
    },
    editPhoneNumber() {
      this.$router.push({ name: "EditPhoneNumber" });
    },
    changePassword() {
      this.$router.push({ name: "ChangePassword" });
    },
    changeAdress() {
      this.$router.push({ name: "EditAdress" });
    },
    changeEmail() {
      this.$router.push({ name: "ChangeEmail" });
    },
    settingPage() {
      this.$router.push({ name: "setting" });
    },
  },
};
</script>

<style>
</style>

DynamicHeader
