<template>
  <q-page class="full-height q-px-md" dir="rtl">
    <!-- //////////////////////// -->
    <!-- top nav for back or skip -->
    <!-- //////////////////////// -->
    <BackAndSkip class="q-py-md" iconSrc="arrow_forward_ios" />
    <!-- //////////////////////// -->
    <div class="text-h4 text-bold">التحقق من رقم الهاتف</div>
    <div class="text-body2">
      ستصلك رسالة نصية برمز التحقق علي رقم {{ phone_num }}
    </div>
    <q-form
      dir="ltr"
      @submit.prevent="vifred"
      class="row items-center justify-around"
    >
      <!-- //////////////////////// -->
      <!-------- input firs key ------>
      <!-- //////////////////////// -->
      <q-input
        class="text-center col-2 text-h3"
        :input-style="{ textAlign: 'center' }"
        ref="input1"
        filled
        v-model="ids.id1"
        maxlength="1"
        rounded
        required
        @keyup="changeToTow"
      />
      <!-- //////////////////////// -->
      <!-------- input key (2) ------->
      <!-- //////////////////////// -->
      <q-input
        class="text-center text-h3 col-2"
        :autofocus="fucas_num == '2'"
        filled
        v-model="ids.id2"
        :input-style="{ textAlign: 'center' }"
        ref="input2"
        maxlength="1"
        required
        rounded
        @keyup="changeToThre"
      />
      <!-- //////////////////////// -->
      <!-------- input key (3) ------->
      <!-- //////////////////////// -->
      <q-input
        class="text-center text-h3 col-2"
        maxlength="1"
        ref="input3"
        required
        filled
        v-model="ids.id3"
        :input-style="{ textAlign: 'center' }"
        rounded
        @keyup="changeToFour"
      />
      <!-- //////////////////////// -->
      <!-------- input key (4) ------->
      <!-- //////////////////////// -->

      <q-input
        class="text-center text-h3 col-2"
        filled
        ref="input4"
        required
        v-model="ids.id4"
        :input-style="{ textAlign: 'center' }"
        maxlength="1"
        rounded
        @keyup="doneVifr"
      />
      <div class="col-10 q-my-sm btn-container">
        <q-btn
          type="submit"
          color="primary"
          class="main-rounded full-width q-py-sm q-my-sm"
          label="تحقق"
          @click="doneVifr"
          :loading="load"
        />
      </div>
    </q-form>
    <div v-if="!time_out" class="col-11 q-my-sm">
      <span @click="backToCheckNumber" class="text-body2">لم تتلق رمز ؟</span>
      <span class="q-px-md text-caption text-grey-5"
        >اعادوة الأرسال {{ min }}:{{ suc }}</span
      >
    </div>
    <div v-else class="col-11 q-my-sm">
      <span class="text-body2" @click="resendCode">اعد الأرسال</span>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";
export default {
  components: { BackAndSkip },
  setup() {
    return {
      phone_num: ref(""),
      load: ref(false),
      // 4 model to vaidation key
      ids: ref({
        id1: "",
        id2: "",
        id3: "",
        id4: "",
      }),
      suc: ref(59),
      min: ref(1),
      time_out: ref(false),
    };
  },
  watch: {
    //time out adter 2 min => time_out = true
    suc(val) {
      if (val !== 0) {
        setTimeout(() => {
          this.suc--;
        }, 1000);
      } else if (!val && !this.min) {
        this.time_out = true;
      } else {
        this.suc = 59;
        this.min--;
      }
    },
  },
  computed: {
    // merge 4 key in sigle value
    mergeInputs() {
      return this.ids.id1 + this.ids.id2 + this.ids.id3 + this.ids.id4;
    },
  },
  mounted() {
    // start calc on mounte this page
    this.suc--;
    // get phone numper from params incloud route
    this.phone_num = this.$route.params.phone;
  },
  methods: {
    // on type focus in next input
    changeToTow() {
      this.$refs.input2.$el.focus();
    },
    // on type focus in next input
    changeToThre() {
      this.$refs.input3.$el.focus();
    },
    // on type focus in next input
    changeToFour() {
      this.$refs.input4.$el.focus();
    },
    backToCheckNumber() {
      this.$router.push({ name: "ForgetPassword" });
    },
    doneVifr() {
      // on type in last input supmit & on click
      this.load = true;
      this.$router.push({ name: "creatNewPassword" });
      setTimeout(() => {
        this.this.load = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
