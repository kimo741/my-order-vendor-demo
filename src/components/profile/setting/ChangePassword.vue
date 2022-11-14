<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader title="ملفي" :back-icon="true" />
    <UploadProfileImg />
    <div class="text-center text-body2 text-500 q-my-sm">اسم المستخدم</div>
    <q-form @submit.prevent="changeUserName" class="q-my-md">
      <!-- old password -->
      <div class="q-my-md">
        <div class="text-right text-500 q-mx-sm">كلمة المرور القديمة</div>
        <q-input
          filled
          dense
          rounded
          class="input"
          outlined
          v-model="old_password"
          :type="isPwd ? 'password' : 'text'"
          required
        >
          <!-- //////////////////////////////////// -->
          <!-- toggle btn to show password or hidin -->
          <!-- //////////////////////////////////// -->
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
              standout
            />
          </template>
        </q-input>
      </div>
      <!-- //////////// -->
      <!-- new password -->
      <!-- //////////// -->
      <div class="q-my-md">
        <div class="text-right text-500 q-mx-sm">كلمة المرور الجديدة</div>
        <q-input
          filled
          dense
          rounded
          class="input"
          outlined
          v-model="new_password"
          :type="isPwd ? 'password' : 'text'"
          required
        >
          <!-- //////////////////////////////////// -->
          <!-- toggle btn to show password or hidin -->
          <!-- //////////////////////////////////// -->
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
              standout
            />
          </template>
        </q-input>
      </div>
      <!-- //////////////// -->
      <!-- confirm password -->
      <!-- //////////////// -->
      <div class="q-my-md">
        <div class="text-right text-500 q-mx-sm">تأكيد كلمة المرور الجديدة</div>
        <q-input
          filled
          dense
          rounded
          class="input"
          outlined
          v-model="confirm_password"
          :type="isPwd ? 'password' : 'text'"
          required
        >
          <!-- //////////////////////////////////// -->
          <!-- toggle btn to show password or hidin -->
          <!-- //////////////////////////////////// -->
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
              standout
            />
          </template>
        </q-input>
      </div>
      <div class="row justify-center q-mt-xl">
        <q-btn
          type="submit"
          color="primary"
          style="width: 90%"
          class="main-rounded q-py-sm q-my-sm q-mx-auto"
          label="حفظ"
          unelevated
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import UploadProfileImg from "src/components/UI/UploadProfileImg.vue";
import { ref } from "vue";
export default {
  components: { DynamicHeader, UploadProfileImg },
  setup() {
    return {
      old_password: ref(""),
      new_password: ref(""),
      confirm_password: ref(""),
      isPwd: ref(false),
    };
  },
};
</script>

<style>
</style>
