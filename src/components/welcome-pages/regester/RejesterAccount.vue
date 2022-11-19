<template>
  <q-page class="full-height q-px-md" dir="rtl">
    <BackAndSkip class="q-py-sm" iconSrc="arrow_forward_ios" />
    <div class="text-h4 text-bold">انشاء حساب جديد</div>
    <div class="text-body2">ادخال البيانات الشخصية</div>
    <!-- ///////////////// -->
    <!------ user type------->
    <!-- ///////////////// -->
    <div class="q-gutter-sm row q-my-sm">
      <div class="text-body2 col user-type">تسجيل الدخول :</div>
      <q-radio
        dense
        class="col user-type"
        val="user"
        v-model="user_type"
        size="sm"
        label="مستخدم"
        color="primary"
      />
      <q-radio
        dense
        class="col user-type"
        val="vendor"
        v-model="user_type"
        label="مزود خدمة"
        size="sm"
        color="primary"
      />
      <q-radio
        dense
        class="col user-type"
        val="deiver"
        size="sm"
        v-model="user_type"
        label="مندوب"
        color="primary"
      />
    </div>
    <q-form @reset="onReset" @submit.prevent="rejester">
      <div class="row justify-even items-end">
        <!-- /////////////////// -->
        <!------ profile Img------->
        <!-- /////////////////// -->
        <div class="col-4 q-mb-md">
          <UploadProfileImg @uploadFile="passProfileImg" />
        </div>
        <!-- /////////////////// -->
        <!--------- name----------->
        <!-- /////////////////// -->
        <q-input
          class="col-7 q-mx-auto q-my-sm main-rounded"
          bg-color="grey-4"
          rounded
          filled
          label="الاسم"
          required
          flat
          v-model="name"
        />
        <!-- /////////////////// -->
        <!--------- phone --------->
        <!-- /////////////////// -->
        <q-input
          class="col-11 q-mx-auto q-my-sm main-rounded"
          bg-color="grey-4"
          rounded
          filled
          label="رقم الجوال"
          required
          flat
          type="number"
          v-model="phone_num"
        />
        <!-- ////////////////////// -->
        <!--------- password --------->
        <!-- ////////////////////// -->
        <q-input
          class="col-11 q-mx-auto q-my-md main-rounded"
          bg-color="grey-4"
          rounded
          label="كلمة المور"
          filled
          required
          flat
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
        >
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
      <!-- ////////////////////// -->
      <!--------- user sex --------->
      <!-- ////////////////////// -->
      <div class="q-gutter-sm row q-my-md">
        <div class="text-body2 col-2 user-type">النوع :</div>
        <q-radio
          dense
          class="col-2 user-type"
          val="female"
          v-model="user_sex"
          size="sm"
          label="انثي"
          color="primary"
        />
        <q-radio
          dense
          class="col-2 user-type"
          val="male"
          v-model="user_sex"
          label="ذكر"
          size="sm"
          color="primary"
        />
      </div>
      <!-- ////////////////////// -->
      <!---------- date  ----------->
      <!-- ////////////////////// -->
      <div class="q-gutter-xs row q-my-md">
        <div class="text-body2 col user-type">تاريخ الميلاد :</div>
        <q-select
          class="col"
          dense
          required
          filled
          v-model="day_val"
          :options="day_opstions"
        />
        <q-select
          class="col"
          filled
          v-model="month_val"
          :options="month_opstions"
          dense
          required
        />
        <q-select
          class="col"
          filled
          v-model="year_val"
          :options="year_opthions"
          dense
          required
        />
      </div>
      <!-- ////////////////////// -->
      <!------accebted roles-------->
      <!-- ////////////////////// -->
      <div class="row items-center">
        <q-checkbox class="col-2" v-model="accebt_role" />
        <div class="text-body2 col-10 user-type">
          الموافقة علي الاحكام والشروط
        </div>
      </div>
      <!-- ////////////////////// -->
      <!--------submit btn---------->
      <!-- ////////////////////// -->
      <q-btn
        type="submit"
        color="primary"
        class="main-rounded q-py-sm full-width q-pt-sm q-my-sm"
        label="تسجيل"
        unelevated
      />
      <!-- ////////////////////// -->
      <!--------open as gust-------->
      <!-- ////////////////////// -->
      <q-btn
        flat
        color="grey-6"
        class="main-rounded q-py-sm full-width q-pt-sm q-my-sm"
        label="الدخول كذائر"
        unelevated
      />
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import BackAndSkip from "src/components/Bar/top/backAndSkip.vue";
import UploadProfileImg from "src/components/UI/UploadProfileImg.vue";
export default {
  components: { BackAndSkip, UploadProfileImg },
  setup() {
    return {
      accebt_role: ref(false),
      user_sex: ref(""),
      isPwd: ref(true),
      password: ref(""),
      phone_num: ref(""),
      user_type: ref(false),
      name: ref(""),
      // day
      day_opstions: ref([]),
      day_val: ref("1"),
      // monthe
      month_opstions: ref([
        "يناير",
        "	فبراير",
        "	مارس",
        "أبريل",
        "	مايو",
        "يونيو",
        "يوليو",
        "	أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ]),
      month_val: ref("يناير"),
      // year
      year_val: ref("1987"),
      year_opthions: ref([]),
      //
    };
  },
  computed: {},
  methods: {
    passProfileImg(file) {
      // console.log(file);
    },
    dayClac() {
      for (var i = 1; i <= 31; i++) {
        this.day_opstions.push(i);
      }
    },

    yearClac() {
      const mydate = new Date();
      const myYear = mydate.getFullYear();
      for (var i = 1961; i <= myYear; i++) {
        this.year_opthions.push(i);
      }
    },
    rejester() {
      // submit
    },
  },
  mounted() {
    console.log(Date());
    this.dayClac();
    this.yearClac();
  },
};
</script>

<style scoped>
.user-type {
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
}
</style>
