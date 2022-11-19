<template>
  <q-page class="full-height q-px-md" dir="rtl">
    <!-- //////////////////////// -->
    <!-- top bar for back or skip -->
    <!-- //////////////////////// -->
    <BackAndSkip class="q-py-md" iconSrc="arrow_forward_ios" />
    <!-- //////////////////////// -->
    <div class="text-h4 text-bold">التحقق من رقم الهاتف</div>
    <div class="text-body2">اعد ادخال كلمة مرور جديده</div>
    <q-form class="q-my-lg row" @reset="onReset" @submit.prevent="sendVifrCode">
      <!-- ////////////////////// -->
      <!-- input for new password -->
      <!-- ////////////////////// -->
      <q-input
        class="col-11 q-mx-auto q-my-md main-rounded"
        bg-color="4"
        rounded
        label="كلمة المور"
        filled
        required
        flat
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
      <!-- ///////////////////// -->
      <!-- retype a new password -->
      <!-- ///////////////////// -->

      <q-input
        class="col-11 q-mx-auto q-my-sm main-rounded"
        bg-color="grey-4"
        rounded
        filled
        label=" تأكيد كلمة المور"
        required
        flat
        v-model="re_password"
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
      <!-- ///////////// -->
      <!-- resset inputs -->
      <!-- ///////////// -->
      <q-btn
        type="reset"
        color="grey-5"
        class="main-rounded full-width q-py-sm q-my-sm"
        label="اعادة كتابة كلمة المرور"
        size="sm"
        unelevated
        flat
      />
      <!-- //////////// -->
      <!-- supmit buton -->
      <!-- //////////// -->
      <q-btn
        type="submit"
        color="primary"
        class="main-rounded q-py-sm full-width q-pt-sm q-my-sm"
        label="حفظ"
        unelevated
      />
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";
export default {
  setup() {
    return {
      isPwd: ref(true),
      password: ref(""),
      re_password: ref(""),
    };
  },
  methods: {
    // supmit function
    sendVifrCode() {
      if (this.password == this.re_password) {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "تم تغير كلمة المرور",
        });
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "كلمة المرور غير متطابقه",
        });
      }
    },
    onReset() {
      this.password = null;
      this.re_password = null;
    },
  },
  components: { BackAndSkip },
};
</script>

<style>
</style>
