<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader title="ملفي" :back-icon="true" />
    <UploadProfileImg />
    <div class="text-center text-body2 text-500 q-my-sm">اسم المستخدم</div>
    <q-form @submit.prevent="changeUserName" class="q-my-md">
      <div class="q-my-md">
        <div class="text-right text-500 q-mx-sm">اسم المستخدم</div>
        <q-input
          v-model="new_username"
          filled
          dense
          rounded
          class="input"
          outlined
        />
      </div>
      <div class="q-my-md">
        <div class="text-right text-500 q-mx-sm">كلمة المرور</div>
        <q-input
          filled
          dense
          rounded
          class="input"
          outlined
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
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
      isPwd: ref(false),
      password: ref(""),
      new_username: ref("اسم المستخدم"),
    };
  },
  methods: {
    changeUserName() {},
  },
};
</script>

<style>
</style>
